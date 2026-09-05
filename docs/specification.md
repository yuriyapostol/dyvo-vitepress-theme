# dyvo-vitepress-theme: specification

## Status
Draft.

## Purpose
`@yuriyapostol/dyvo-vitepress-theme` is a reusable package for VitePress-based sites.
It should provide:
- a reusable theme layer on top of VitePress;
- reusable UI components and content features;
- shared configuration helpers for SEO, metadata, and content conventions;
- a stable integration surface for multiple sites.

The package is intended to be used by `dyvoshkola.github.io` first, but it must not be tightly coupled to that single site.

## Main goals
1. Extract reusable VitePress customizations from `dyvoshkola.github.io` into a standalone package.
2. Preserve the ability to update upstream VitePress regularly.
3. Keep local customizations working while upstream pull requests are still open.
4. Allow reuse of the same package across multiple sites.
5. Keep site-specific content, navigation, and branding outside of the package by default.

## Non-goals
- Do not fork VitePress by default.
- Do not move site content into this repository.
- Do not hardcode one specific site structure unless explicitly documented as a feature contract.
- Do not expose internal implementation details as public API unless they are intended to be supported long-term.

## Architectural principles

### 1. Layered design
The package should be split into three logical layers:
- `theme core`: layout, navigation primitives, sidebar primitives, shared styles, theme config types;
- `features`: optional and reusable content-oriented extensions such as comments and news;
- `helpers`: shared utilities for SEO, metadata derivation, and configuration assembly.

### 2. Public API first
Consumers should use only documented exports from the package root.
Internal files and folders may change without being treated as breaking API.

### 3. Site-specific data stays outside
The package may define schemas and helpers for configuration, but actual site data should remain in the consuming project:
- navigation trees;
- sidebar trees;
- site URL;
- brand copy and labels;
- external service IDs and repository names;
- content collections.

### 4. Upstream compatibility matters
The package should prefer VitePress public APIs.
Imports from `vitepress/dist/...` are allowed only as an explicit temporary compatibility tradeoff and should be tracked as technical debt.

## Initial scope

### Theme core
The initial `theme core` is expected to contain:
- custom `Layout` wrapper;
- local navigation;
- sidebar components;
- VitePress wrappers for shared badge UI from `@yuriyapostol/dyvo-vue-ui`;
- base CSS customizations;
- theme config typings.

### Features
The initial `features` scope is expected to contain:
- `comments`: Giscus-based comments integration;
- `news`: listing, archive links, metadata rendering, and related utilities.

The `news` feature may depend on a documented content contract, including a directory convention such as `news/**/*.md`, if that contract is explicitly declared in the documentation.

Current decision:
- `comments` and `news` should be disabled by default and enabled explicitly by the consuming site.
- `news` stays in the main package for now. Renaming or extraction may be revisited later if the package surface changes.

### Helpers
The initial helper scope is expected to contain:
- fallback metadata extraction from markdown files;
- page identifier derivation;
- SEO head helpers;
- locale helpers;
- config composition helpers.

## Proposed repository structure

```text
src/
  index.ts
  config/
    createConfig.ts
  theme/
    index.ts
    config.ts
    styles/
      base.css
    components/
      Layout.vue
      LocalNav.vue
      Sidebar.vue
      SidebarGroup.vue
      SidebarItem.vue
      DyvoBadge.vue        # VitePress wrapper around @yuriyapostol/dyvo-vue-ui
      DyvoUserBadge.vue    # VitePress wrapper around @yuriyapostol/dyvo-vue-ui
    internals/
      vitepress-internals.d.ts
  features/
    comments/
      index.ts
      config.ts
      Comments.vue
      giscus-light-theme.css
      giscus-dark-theme.css
    news/
      index.ts
      config.ts
      utils.ts
      NewsList.vue
      NewsMeta.vue
      NewsMetaAuthors.vue
      NewsMetaPublishedAt.vue
      NewsMetaStatuses.vue
      NewsArchiveLinks.vue
  shared/
    i18n.ts
    seo.ts
    page-metadata.ts
```

## Proposed public exports
The package root should eventually expose only a small documented API:
- `theme`
- `createConfig`
- `defineThemeConfig`
- selected reusable Vue components only if they are meant for direct consumer use

Helper intent:
- `defineThemeConfig` should be a typed helper for the package-specific `themeConfig` shape.
- `createConfig` should be a small factory for assembling the final VitePress config with package defaults and shared config logic when that becomes necessary.

Current decision:
- Keep the export surface minimal and use `theme`, `createConfig`, and `defineThemeConfig` as the primary package API.

Possible entry points:
- `@yuriyapostol/dyvo-vitepress-theme`
- `@yuriyapostol/dyvo-vitepress-theme/theme`
- `@yuriyapostol/dyvo-vitepress-theme/features/news`
- `@yuriyapostol/dyvo-vitepress-theme/features/comments`

Subpath exports should be added only when there is a real consumer need.

## Consumption model
A consuming VitePress site should stay thin.

Expected responsibilities of the consuming site:
- content files;
- `.vitepress/config.*` as a site assembly layer;
- site navigation and sidebar data;
- feature configuration values;
- brand assets and brand text unless intentionally shared.

Expected responsibilities of the package:
- reusable theme implementation;
- reusable feature implementation;
- config helpers and types;
- stable defaults where appropriate.

## Documentation strategy
Yes, this repository may contain its own documentation site built with VitePress, including examples that use the package itself.
This is a good fit for this project.

That documentation should serve several purposes:
- package usage guide;
- API reference;
- feature contracts such as required content structure for `news`;
- development notes for maintainers;
- visual sandbox for testing the theme and components.

## Will documentation make the package heavier?
Not if the repository is structured correctly.

Documentation should not be shipped to consuming projects as runtime package payload.
To ensure that:
- source package code should live under `src/`;
- documentation should live under `docs/`;
- docs-only dependencies should stay in `devDependencies`;
- published package contents should be restricted with `files` in `package.json`;
- package `exports` should expose only package entry points, not `docs/*`;
- build output for the package should be separate from the docs build output.

In other words, one repository may host both:
- the reusable npm package;
- its own VitePress documentation site.

But consumers should install only the published package artifacts, not the docs site.

## Recommended documentation layout

```text
docs/
  index.md
  getting-started.md
  installation.md
  configuration.md
  specification.md
  components/
    theme.md
    comments.md
    news.md
```

The docs site may use the package itself for dogfooding.
That is desirable as long as package build and docs build remain separate concerns.

## Packaging constraints
The package should be safe to consume without dragging unnecessary files.

Requirements:
- `package.json` should use `files` to limit published artifacts;
- built output should go to `dist/`;
- docs build output should go to a separate location such as `.vitepress/dist` inside `docs/` and should not be published as package runtime code;
- `peerDependencies` should be considered for `vitepress`, `vue`, and related tooling if that gives cleaner integration;
- the package should document compatible VitePress version ranges.

## Upstream strategy
Default strategy:
1. Implement through package-level theme customization first.
2. If VitePress public API is insufficient, identify the missing extension point.
3. Submit an upstream PR when the improvement is generally useful.
4. Keep a temporary local workaround until the upstream change is available.
5. Use a minimal fork or patch only when the workaround cannot be expressed cleanly in the package.

## Initial migration plan
1. Create package skeleton in this repository.
2. Move reusable code from `dyvoshkola.github.io/.vitepress/theme` into `src/theme`.
3. Move reusable code from `dyvoshkola.github.io/.vitepress/features` into `src/features`.
4. Move shared helpers into `src/shared` and `src/config`.
5. Replace direct site implementation with package consumption.
6. Stabilize package API and document feature contracts.
7. Reduce reliance on `vitepress/dist/...` over time.

## Current decisions
- The initial stable public API should use `theme`, `createConfig`, and `defineThemeConfig`.
- `comments` and `news` should be opt-in.
- `news` should remain inside the main package for now.
- The package should be consumed locally first through a `file:` dependency.
- After local integration stabilizes, the consuming site should switch to a GitHub git dependency pinned to a specific version reference such as a tag or commit SHA.
- The package should officially support the same VitePress minor line as the consuming site, currently `^1.6.4`.

## Immediate next step
Use this specification as the source of truth for scaffolding the package and for extracting code from `dyvoshkola.github.io` into `dyvo-vitepress-theme`.
