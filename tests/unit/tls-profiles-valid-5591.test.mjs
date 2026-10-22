import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// #5591 regression guard: every TLS impersonation profile referenced in the
// source must be a real BrowserProfile in the pinned wreq-js package. An invalid
// value makes the native layer produce a degenerate fingerprint. Read the
// supported set straight from the installed type definitions so this guard
// moves with an intentional dependency upgrade.

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

function supportedProfiles() {
  const dts = fs.readFileSync(
    path.join(ROOT, "node_modules", "wreq-js", "dist", "wreq-js.d.ts"),
    "utf8"
  );
  const union = dts.match(/type BrowserProfile = ([^;]+);/)?.[1] ?? "";
  return new Set([...union.matchAll(/'([^']+)'/g)].map((match) => match[1]));
}

const TRANSPORT_PROFILES = {
  "open-sse/utils/tlsClient.ts": ["chrome_124", "macos"],
  "open-sse/services/claudeTlsClient.ts": ["chrome_146", "linux"],
  "open-sse/services/perplexityTlsClient.ts": ["firefox_148", "macos"],
  "open-sse/services/grokTlsClient.ts": ["chrome_146", "linux"],
  "open-sse/services/notionTlsClient.ts": ["chrome_146", "windows"],
  "open-sse/services/lmarenaTlsClient.ts": ["chrome_146", "windows"],
};

// Other source files that hand a browser profile directly to wreq-js.
const SOURCES = [
  "src/app/api/internal/codex-responses-ws/route.ts",
  "open-sse/executors/codex.ts",
  "open-sse/executors/codex/appServerClient.ts",
  "open-sse/executors/grok-web.ts",
  "open-sse/executors/notion-web.ts",
  "open-sse/utils/proxyFetch.ts",
  "scripts/dev/responses-ws-proxy.mjs",
  ...Object.keys(TRANSPORT_PROFILES),
];

// Strip comments before scanning — explanatory comments may name the bad
// profile ("chrome_149 absent in 2.3.1") without it ever reaching wreq-js.
function stripComments(line) {
  return line.replace(/\/\*.*?\*\//g, "").replace(/\/\/.*$/, "");
}

test("#5591 all configured browser TLS profiles exist in pinned wreq-js", () => {
  const supported = supportedProfiles();
  assert.ok(supported.size > 0, "expected to parse BrowserProfile from wreq-js d.ts");

  for (const rel of SOURCES) {
    const lines = fs.readFileSync(path.join(ROOT, rel), "utf8").split("\n");
    lines.forEach((line, i) => {
      const code = stripComments(line);
      for (const m of code.matchAll(/\b(?:chrome|firefox|edge|opera|safari|okhttp)_[\w.]+/g)) {
        const profile = m[0];
        assert.ok(
          supported.has(profile),
          `${rel}:${i + 1} uses ${profile} which is NOT a wreq-js BrowserProfile ` +
            `(supported: ${[...supported].sort().join(", ")})`
        );
      }
    });
  }

  // Executors must not freeze a profile literal. A version the library ships
  // still passes the check above, so this one rejects the literal itself.
  const NO_LITERAL = [
    "open-sse/executors/codex.ts",
    "open-sse/executors/codex/appServerClient.ts",
    "open-sse/executors/grok-web.ts",
    "open-sse/executors/notion-web.ts",
    "open-sse/utils/proxyFetch.ts",
  ];
  for (const rel of NO_LITERAL) {
    const source = fs.readFileSync(path.join(ROOT, rel), "utf8");
    assert.doesNotMatch(
      source,
      /(?:browser|tlsProfile):\s*["'](?:chrome|firefox)_/,
      `${rel} freezes a browser profile instead of reading the library`
    );
  }

  for (const [rel, [profile, os]] of Object.entries(TRANSPORT_PROFILES)) {
    const source = fs.readFileSync(path.join(ROOT, rel), "utf8");
    assert.ok(supported.has(profile), `${rel} expected unsupported ${profile}`);

    if (rel.endsWith("utils/tlsClient.ts")) {
      assert.match(source, /newestChromeProfile\(\)/);
      assert.match(source, /os: "macos"/);
    } else if (/\/(grok|notion|lmarena|claude)TlsClient\.ts$/.test(rel)) {
      assert.match(source, /tlsProfile: newestChromeProfile,/);
      assert.match(source, new RegExp(`emulationOs: ["']${os}["']`));
    } else if (rel.endsWith("perplexityTlsClient.ts")) {
      assert.match(source, /tlsProfile: newestFirefoxProfile,/);
      assert.match(source, new RegExp(`emulationOs: ["']${os}["']`));
    } else {
      assert.match(source, new RegExp(`tlsProfile: ["']${profile}["']`));
      assert.match(source, new RegExp(`emulationOs: ["']${os}["']`));
    }
  }
});
