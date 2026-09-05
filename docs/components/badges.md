# Badges

The `dyvo-vitepress-theme` package registers two badge components from [`@yuriyapostol/dyvo-vue-ui`](https://github.com/yuriyapostol/dyvo-vue-ui):

- `DyvoBadge` for universal, flexibly configurable badges.
- `DyvoUserBadge` for user or content author badges with optional GitHub profile integration.

These components are registered globally by the theme, so they can be used directly in markdown and Vue-powered docs pages without importing them manually.

In this theme, `DyvoBadge` and `DyvoUserBadge` are thin VitePress wrappers around the UI package components. The wrappers pass VitePress' configured base path to the UI components, so root-relative image paths like `/images/logo.svg` continue to work correctly when the site is deployed under a non-root base.

Because the package extends the VitePress default theme, the original VitePress `Badge` remains available too.

## `DyvoBadge`

`DyvoBadge` supports the same core API as the UI package component:

- text via `text` prop or default slot;
- colors via `color`: `info`, `tip`, `warning`, `danger`, `success`;
- variants: `soft`, `accent`, `solid`, `outline`, `plain`;
- sizes: `small`, `medium`, `large`;
- vertical alignment via `verticalAlign`: `unset`, `baseline`, `middle`, `super`, `sub`;
- optional image via `imageSrc` / `imageAlt` props or the `image` slot;
- optional link via `href`;
- optional base path via `base`;
- interactive state via `interactive`;
- disabled state via `disabled`.

Example:

<div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center; margin: 16px 0;">
  <DyvoBadge text="Stable" color="success" variant="soft" />
  <DyvoBadge text="Experimental" color="warning" variant="outline" />
  <DyvoBadge text="GitHub" color="info" variant="accent" href="https://github.com/yuriyapostol/dyvo-vitepress-theme" />
  <DyvoBadge text="With image" image-src="/images/logo.svg" image-alt="Project logo" />
</div>

```html
<DyvoBadge text="Stable" color="success" variant="soft" />
<DyvoBadge text="Experimental" color="warning" variant="outline" />
<DyvoBadge text="GitHub" color="info" variant="accent" href="https://github.com/yuriyapostol/dyvo-vitepress-theme" />
<DyvoBadge text="With image" image-src="/images/logo.svg" image-alt="Project logo" />
```

You can also pass the label through the default slot:

<div style="margin: 16px 0;">
  <DyvoBadge color="tip" variant="solid">Featured</DyvoBadge>
</div>

```html
<DyvoBadge color="tip" variant="solid">Featured</DyvoBadge>
```

You can add a custom image through the `image` slot using an `img` tag:

<div style="margin: 16px 0;">
  <DyvoBadge text="Image slot" image-alt="Project logo">
    <template #image>
      <img src="/images/simple-logo.svg" alt="Project logo" />
    </template>
  </DyvoBadge>
</div>

```html
<DyvoBadge text="Image slot" image-alt="Project logo">
  <template #image>
    <img src="/images/simple-logo.svg" alt="Project logo" />
  </template>
</DyvoBadge>
```

Or, for example, inline SVG code:

<div style="margin: 16px 0;">
  <DyvoBadge text="SVG slot" image-alt="Project logo">
    <template #image>
      <svg width="32" height="32" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect style="fill:#4400aa" width="32" height="32" x="0" y="0" />
        <path style="fill:none;stroke:#ffffff;stroke-width:2.52;stroke-linecap:butt;stroke-linejoin:bevel" d="m -1.0978942,17.991324 c 10.3148113,1.663511 11.8259462,-6.525645 19.7029652,-3.995225 -2.516126,-0.898775 -8.580151,-1.224087 -8.496544,6.212089 0.02532,2.259723 1.727747,4.948781 5.290295,4.248272 1.234768,-0.242797 2.821112,-1.341713 3.063584,-3.227845 C 19.004469,17.012022 19.377112,11.24108 20.7292,4.6980033 19.377864,11.220191 19.083461,16.14399 18.46479,21.270261 c -0.503841,2.719424 1.795631,3.583091 4.42593,3.24533 2.674227,-0.343408 4.954594,-2.688828 9.650598,-3.899747" />
      </svg>
    </template>
  </DyvoBadge>
</div>

```html
<DyvoBadge text="SVG slot" image-alt="Project logo">
  <template #image>
    <svg width="32" height="32" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect style="fill:#4400aa" width="32" height="32" x="0" y="0" />
      <path style="fill:none;stroke:#ffffff;stroke-width:2.52;stroke-linecap:butt;stroke-linejoin:bevel" d="m -1.0978942,17.991324 c 10.3148113,1.663511 11.8259462,-6.525645 19.7029652,-3.995225 -2.516126,-0.898775 -8.580151,-1.224087 -8.496544,6.212089 0.02532,2.259723 1.727747,4.948781 5.290295,4.248272 1.234768,-0.242797 2.821112,-1.341713 3.063584,-3.227845 C 19.004469,17.012022 19.377112,11.24108 20.7292,4.6980033 19.377864,11.220191 19.083461,16.14399 18.46479,21.270261 c -0.503841,2.719424 1.795631,3.583091 4.42593,3.24533 2.674227,-0.343408 4.954594,-2.688828 9.650598,-3.899747" />
    </svg>
  </template>
</DyvoBadge>
```

Size options:

<div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center; margin: 16px 0;">
  <DyvoBadge size="large" image="/images/logo.svg">large</DyvoBadge>
  <DyvoBadge size="medium" image="/images/logo.svg">medium</DyvoBadge>
  <DyvoBadge size="small" image="/images/logo.svg">small</DyvoBadge>
</div>

```html
<DyvoBadge size="large" image="/images/logo.svg">large</DyvoBadge>
<DyvoBadge size="medium" image="/images/logo.svg">medium</DyvoBadge>
<DyvoBadge size="small" image="/images/logo.svg">small</DyvoBadge>
```

In `dyvo-vitepress-theme`, Dyvo badges also work well inside VitePress document headings, with middle vertical alignment by default:

<div style="display:grid; gap:8px; margin:16px 0;">
  <h1 style="margin:0; padding:0; border:0;">Heading Level 1 <DyvoBadge color="info" variant="solid">h1</DyvoBadge></h1>
  <h2 style="margin:0; padding:0; border:0;">Heading Level 2 <DyvoBadge>h2</DyvoBadge></h2>
  <h3 style="margin:0; padding:0; border:0;">Heading Level 3 <DyvoBadge color="warning">h3</DyvoBadge></h3>
</div>

```html
# Heading Level 1 <DyvoBadge color="info" variant="solid">h1</DyvoBadge>
## Heading Level 2 <DyvoBadge>h2</DyvoBadge>
### Heading Level 3 <DyvoBadge color="warning">h3</DyvoBadge>
```

And in text blocks, with baseline alignment by default:

<div style="display:grid; gap:12px; margin:16px 0;">
  <p style="margin:0;">
    <DyvoBadge size="large" color="tip" variant="soft">large</DyvoBadge>
    This large badge aligns to the text baseline inside a paragraph.
  </p>
  <p style="margin:0;">
    In regular text, a <DyvoBadge color="info" variant="solid">medium</DyvoBadge> badge also stays naturally aligned.
  </p>
</div>

```html
<DyvoBadge size="large" color="tip" variant="soft">large</DyvoBadge>
This large badge aligns to the text baseline inside a paragraph.

In regular text, a <DyvoBadge color="info" variant="solid">medium</DyvoBadge> badge also stays naturally aligned.
```

Typical color and variant combinations are shown below:

<style>
.badge-matrix tr:nth-child(2n) {
  background: transparent;
}
</style>

<table class="badge-matrix">
<thead>
<tr>
<th><code>soft</code></th>
<th><code>accent</code></th>
<th><code>solid</code></th>
<th><code>outline</code></th>
<th><code>plain</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><DyvoBadge color="info" variant="soft">info</DyvoBadge></td>
<td><DyvoBadge color="info" variant="accent">info</DyvoBadge></td>
<td><DyvoBadge color="info" variant="solid">info</DyvoBadge></td>
<td><DyvoBadge color="info" variant="outline">info</DyvoBadge></td>
<td><DyvoBadge color="info" variant="plain">info</DyvoBadge></td>
</tr>
<tr>
<td><DyvoBadge color="tip" variant="soft">tip</DyvoBadge></td>
<td><DyvoBadge color="tip" variant="accent">tip</DyvoBadge></td>
<td><DyvoBadge color="tip" variant="solid">tip</DyvoBadge></td>
<td><DyvoBadge color="tip" variant="outline">tip</DyvoBadge></td>
<td><DyvoBadge color="tip" variant="plain">tip</DyvoBadge></td>
</tr>
<tr>
<td><DyvoBadge color="warning" variant="soft">warning</DyvoBadge></td>
<td><DyvoBadge color="warning" variant="accent">warning</DyvoBadge></td>
<td><DyvoBadge color="warning" variant="solid">warning</DyvoBadge></td>
<td><DyvoBadge color="warning" variant="outline">warning</DyvoBadge></td>
<td><DyvoBadge color="warning" variant="plain">warning</DyvoBadge></td>
</tr>
<tr>
<td><DyvoBadge color="danger" variant="soft">danger</DyvoBadge></td>
<td><DyvoBadge color="danger" variant="accent">danger</DyvoBadge></td>
<td><DyvoBadge color="danger" variant="solid">danger</DyvoBadge></td>
<td><DyvoBadge color="danger" variant="outline">danger</DyvoBadge></td>
<td><DyvoBadge color="danger" variant="plain">danger</DyvoBadge></td>
</tr>
<tr>
<td><DyvoBadge color="success" variant="soft">success</DyvoBadge></td>
<td><DyvoBadge color="success" variant="accent">success</DyvoBadge></td>
<td><DyvoBadge color="success" variant="solid">success</DyvoBadge></td>
<td><DyvoBadge color="success" variant="outline">success</DyvoBadge></td>
<td><DyvoBadge color="success" variant="plain">success</DyvoBadge></td>
</tr>
</tbody>
</table>

`color`, `variant`, `size`, and `verticalAlign` can also be provided through the `class` attribute using prefixed class names:

```html
<DyvoBadge class="color-success variant-solid size-medium vertical-align-middle">Aligned badge</DyvoBadge>
```

You can also customize badge styling through CSS variables passed via the `style` attribute:

<div style="margin: 16px 0;">
  <DyvoBadge
    variant="accent"
    style="--dyvo-badge-current-text-color: #48a103; --dyvo-badge-current-bg-color: #48a10330;"
  >
    Custom green
  </DyvoBadge>
</div>

```html
<DyvoBadge
  variant="accent"
  style="--dyvo-badge-current-text-color: #48a103; --dyvo-badge-current-bg-color: #48a10330;"
>
  Custom green
</DyvoBadge>
```

## `DyvoUserBadge`

`DyvoUserBadge` wraps `DyvoBadge` in the UI package and adds user-oriented defaults.

It supports:

- required `name`;
- optional `github` handle;
- optional `href` override;
- optional `avatarSrc` and `avatarAlt`;
- optional `text` override;
- optional base path via `base`;
- the same `color`, `variant`, `size`, `interactive`, and `disabled` props as `DyvoBadge`.

If `github` is provided:

- the profile link defaults to `https://github.com/<handle>`;
- the avatar defaults to `https://github.com/<handle>.png?size=80`.

Examples:

<div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center; margin: 16px 0;">
  <DyvoUserBadge name="Yuriy Apostol" github="yuriyapostol" />
  <DyvoUserBadge
    name="Project maintainer"
    text="Maintainer"
    avatar-src="https://github.com/yuriyapostol.png?size=80"
    href="https://example.com/team/yuriy"
    color="tip"
    variant="solid"
  />
</div>

```html
<DyvoUserBadge name="Yuriy Apostol" github="yuriyapostol" />
<DyvoUserBadge
  name="Project maintainer"
  text="Maintainer"
  avatar-src="https://github.com/yuriyapostol.png?size=80"
  href="https://example.com/team/yuriy"
  color="tip"
  variant="solid"
/>
```

## Comparison With VitePress `Badge`

`DyvoBadge` was designed to stay compatible with the default VitePress `Badge` use cases while extending them with richer styling, links, sizing, and optional images.

That means you do not need to mix `Badge` and `DyvoBadge` across the same docs set unless you explicitly want two different visual systems.

If you prefer a single badge component everywhere, use `DyvoBadge` for inline markers too:

<div style="margin: 16px 0;">
  API Reference <DyvoBadge color="tip" variant="soft" size="small" text="stable" />
</div>

```html
API Reference <DyvoBadge color="tip" variant="soft" size="small" text="stable" />
```

Use `DyvoBadge` when you want:

- one consistent badge style across the site;
- compatibility with simple inline badge usage;
- larger visual variants when needed;
- interactive badge behavior;
- image support;
- more explicit sizing;
- a pill-like component that can stand alone in content blocks.

If your markdown already uses VitePress `Badge`, the recommended migration path is to register an optional compatibility wrapper instead of extending `DyvoBadge` with legacy props.

The package exports a `Badge` wrapper component for that purpose, but it is not registered by default. You can connect it manually in your theme:

```ts
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { Badge, theme as dyvoTheme } from '@yuriyapostol/dyvo-vitepress-theme'

const theme: Theme = {
  extends: dyvoTheme,
  enhanceApp(ctx) {
    dyvoTheme.enhanceApp?.(ctx)
    ctx.app.component('Badge', Badge)
  }
}

export default theme
```

That wrapper keeps the VitePress-style `type` API and forwards it to `DyvoBadge` via `color`, which lets existing markdown keep using:

```html
API Reference <Badge type="tip" text="stable" />
```
