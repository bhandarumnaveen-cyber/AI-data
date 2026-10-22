---
title: "Design System & Visual Identity"
lastUpdated: 2026-10-20
---

# OmniRoute — Design System & Visual Identity

> **Status:** the dashboard is built on the **Keak CI UI Kit** (`@keak/cheaper-inference-ui-kit`), vendored
> as the workspace `packages/ui-kit` (`@omniroute/ui-kit`; the upstream snapshot is pinned in
> `packages/ui-kit/UPSTREAM.md` and guarded by `npm run check:ui-kit-snapshot`). Light is the canonical
> theme. The accent is Keak lime (`--ci-color-accent`). Inter (letter-spacing 0, `--ci-letter-spacing-ui`)
> is the UI family, Instrument Serif only for large sparse display text (`.ci-dashboard-display`), IBM Plex
> Mono for code — all self-hosted through the `@fontsource/*` imports at the top of `src/app/globals.css`.

## 1. Where things live

- **Tokens.** `packages/ui-kit/src/ci-tokens.css` declares the `--ci-*` tokens; `src/app/globals.css`
  bridges them to the legacy OmniRoute names (`--color-*`, `--radius-*`, `--font-sans`/`--font-mono`,
  `--table-*`, `--orch-status-*`, `--color-fd-*`), so the existing `var(--color-*)` reads and Tailwind
  utilities keep working. New code uses the Tailwind utilities (`bg-surface`, `text-text-muted`,
  `border-border`, `text-success`, `bg-success-bg`, `bg-chart-1`…) or kit classes — never a hex value
  (`tests/unit/design-kit-bridge.test.ts` enforces the bridge).
- **Themes.** `<html className="ci-theme">` (`src/app/layout.tsx`) opts the document into the kit theme.
  `applyTheme()` in `src/store/themeStore.ts` (mirrored by the inline bootstrap script in
  `src/app/layout.tsx`, which runs before hydration) sets `data-theme="dark"|"light"` and toggles the
  `.dark` class on `<html>` together. The kit's dark token set is keyed on `data-theme="dark"`
  (`packages/ui-kit/src/ci-tokens.css`); OmniRoute's own dark overrides (the `.dark` block in
  `globals.css`) and the legacy Tailwind `dark:` utilities key on the `.dark` class. There are no
  accent color presets: the accent always comes from the kit.
- **Components.** `src/shared/components/*` keep the OmniRoute component API. `Button variant="primary"`
  is the kit `default` button (`--ci-button-primary-*`: the inverse surface in light, the accent with
  its `--ci-color-accent-foreground` ink in dark); the `.ci-button--warning` and `.ci-badge[data-tone]` rules at the end of
  `globals.css` (`@layer components`) are OmniRoute extensions on top of the kit classes.
- **Icons.** `<Icon name="material_name">` (`src/shared/components/Icon.tsx`) resolves the name (the
  Material Symbols vocabulary the screens use) through `ICON_MAP` (`src/shared/constants/iconMap.ts`) to a
  Lucide glyph. The Material Symbols font and package are gone: a name missing from the map renders a
  neutral placeholder glyph (`data-icon-missing="true"`) and logs a console warning outside production.
  `npm run gen:icon-map` prints the names in use that are missing from the map
  (`tests/unit/icon-map-coverage.test.ts` fails on any name without a Lucide icon);
  `scripts/dev/codemod-material-icons.mjs <dir|file>... [--write]` rewrites literal
  `<span className="material-symbols-outlined">` spans to `<Icon>`.
- **Brand.** `src/shared/components/OmniRouteLogo.tsx` wraps the kit: the default export `OmniRouteLogo`
  renders `ProductIcon product="omniroute" variant="glyph"` (inline SVG, `basePath`-safe) and
  `OmniRouteLockup` renders `ProductLockup product="omniroute"` (accessible name "Keak OmniRoute") or, for
  white-label operators, their own `name`/`logoSrc`. Product-switcher destinations live in
  `src/shared/constants/keakProducts.ts` (`KEAK_PRODUCT_LINKS`, `KEAK_ACTIVE_PRODUCT`). The standalone
  screens — `src/app/login/page.tsx`, `src/app/status/page.tsx`, `src/app/maintenance/page.tsx`,
  `src/app/offline/page.tsx`, `src/app/not-found.tsx` and `src/shared/components/ErrorPageScaffold.tsx`
  — show the lockup; `tests/unit/brand-pages-static.test.ts` guards it.
- **Shell.** The kit ships `SidebarProvider`/`Sidebar`/`SidebarInset` (`packages/ui-kit/src/sidebar.tsx`);
  OmniRoute's navigation logic lives in `src/shared/components/Sidebar.tsx`.

## 2. Rules

1. Tokens, never literals. Exceptions kept on purpose: the always-dark console terminal, ReactFlow SVG
   strokes via `STATUS_HEX` (`src/shared/constants/statusColors.ts`), and the categorical palettes
   `STRATEGY_COLORS` (`src/app/(dashboard)/dashboard/combos/live/nodes/StrategyNode.tsx`) and
   `LAYER_COLORS` (`src/app/(dashboard)/dashboard/compression/studio/nodes/EngineNode.tsx`).
2. Never patch `packages/ui-kit/src` by hand: sync with `scripts/dev/sync-ui-kit.sh <commit>`; the
   pre-commit gate `npm run check:ui-kit-snapshot` (`.husky/pre-commit`) fails on any byte that
   differs from the pinned upstream commit (it skips with a warning when the upstream clone,
   `UI_KIT_CLONE` or `_references/cheaper-inference-ui-kit`, is absent).
3. Kit text defaults are English (`label = "Loading"`, `loadingLabel = "Loading table"`…) — pass translated
   strings from `useTranslations(...)` whenever a kit component renders text.
4. Tailwind utilities win over kit component classes (the kit declares
   `@layer theme, base, components, utilities` and its rules live in `components`) — use utilities for
   spacing and layout, not to re-color kit components.
5. Headings: `.ci-heading` (Inter, no tracking) for page and section titles; `.ci-dashboard-display`
   (Instrument Serif) only for large, sparse display text such as the error-page status code.
6. Verify both themes and the 390 px viewport before a PR (screenshots); `tests/e2e/a11y.spec.ts` runs
   axe.

## 3. Updating the kit

`scripts/dev/sync-ui-kit.sh <commit> [clone]` copies the upstream `src/` at that commit into
`packages/ui-kit/src` and applies the single allowed transformation (it drops the `.js` suffix from
relative imports). Then: review `git diff packages/ui-kit`, do a visual pass on providers, settings, combos,
usage and endpoint in both themes, run `npm run check:ui-kit-snapshot` and `npm run test:vitest:ui`, and
open the PR with the upstream changelog.

## 4. Reference index

- `src/app/globals.css` — token bridge, `.dark` overrides, OmniRoute `@layer components` extensions
- `packages/ui-kit/UPSTREAM.md` — pinned upstream commit
- `packages/ui-kit/src/ci-tokens.css`, `packages/ui-kit/src/ci-ui.css`, `packages/ui-kit/src/keak-brand.tsx`
- `src/shared/components/Icon.tsx`, `src/shared/constants/iconMap.ts`, `scripts/dev/gen-icon-map.mjs`,
  `scripts/dev/codemod-material-icons.mjs`
- `src/shared/components/OmniRouteLogo.tsx`, `src/shared/constants/keakProducts.ts`
- `src/store/themeStore.ts`, `src/shared/constants/statusColors.ts`
- `tests/unit/design-kit-bridge.test.ts`, `tests/unit/icon-map-coverage.test.ts`,
  `tests/unit/brand-pages-static.test.ts`, `tests/unit/ui/adapters/*.test.tsx`
