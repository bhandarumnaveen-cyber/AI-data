import test from "node:test";
import assert from "node:assert/strict";

const { newestProfile } = await import("../../open-sse/utils/tlsClient.ts");

test("picks the highest plain version of a family", () => {
  const profiles = ["chrome_124", "chrome_146", "firefox_151", "chrome_149", "chrome_android_146"];
  assert.equal(newestProfile("chrome", profiles), "chrome_149");
  assert.equal(newestProfile("firefox", profiles), "firefox_151");
});

test("returns null when the family is absent", () => {
  assert.equal(newestProfile("safari", ["chrome_149"]), null);
});
