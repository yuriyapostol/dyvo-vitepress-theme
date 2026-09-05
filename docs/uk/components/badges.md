# Бейджі

Пакет `dyvo-vitepress-theme` реєструє два компоненти бейджів із [`@yuriyapostol/dyvo-vue-ui`](https://github.com/yuriyapostol/dyvo-vue-ui):

- `DyvoBadge` для універсальних, гнучко налаштовуваних бейджів.
- `DyvoUserBadge` для бейджів користувача або автора матеріалу і опційною інтеграцією з GitHub-профілем.

Ці компоненти глобально реєструються темою, тому їх можна напряму використовувати в markdown і на Vue-сторінках документації без ручного імпорту.

У цій темі `DyvoBadge` і `DyvoUserBadge` є тонкими VitePress-обгортками навколо компонентів з UI-пакета. Обгортки передають у UI-компоненти налаштований base path VitePress, тому root-relative шляхи до зображень на кшталт `/images/logo.svg` коректно працюють і тоді, коли сайт опублікований не в корені домену.

Оскільки пакет розширює стандартну тему VitePress, оригінальний `Badge` з VitePress теж лишається доступним.

## `DyvoBadge`

`DyvoBadge` підтримує той самий основний API, що й компонент з UI-пакета:

- текст через проп `text` або default slot;
- кольори через `color`: `info`, `tip`, `warning`, `danger`, `success`;
- варіанти: `soft`, `accent`, `solid`, `outline`, `plain`;
- розміри: `small`, `medium`, `large`;
- вертикальне вирівнювання через `verticalAlign`: `unset`, `baseline`, `middle`, `super`, `sub`;
- опційне зображення через параметри `imageSrc` / `imageAlt` або слот `image`;
- опційне посилання через `href`;
- опційний base path через `base`;
- інтерактивний стан через `interactive`;
- вимкнений стан через `disabled`.

Приклад:

<div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center; margin: 16px 0;">
  <DyvoBadge text="Стабільно" color="success" variant="soft" />
  <DyvoBadge text="Експериментально" color="warning" variant="outline" />
  <DyvoBadge text="GitHub" color="info" variant="accent" href="https://github.com/yuriyapostol/dyvo-vitepress-theme" />
  <DyvoBadge text="З зображенням" image-src="/images/logo.svg" image-alt="Логотип проєкту" />
</div>

```html
<DyvoBadge text="Стабільно" color="success" variant="soft" />
<DyvoBadge text="Експериментально" color="warning" variant="outline" />
<DyvoBadge text="GitHub" color="info" variant="accent" href="https://github.com/yuriyapostol/dyvo-vitepress-theme" />
<DyvoBadge text="З зображенням" image-src="/images/logo.svg" image-alt="Логотип проєкту" />
```

Підпис можна передавати і через default slot:

<div style="margin: 16px 0;">
  <DyvoBadge color="tip" variant="solid">Рекомендовано</DyvoBadge>
</div>

```html
<DyvoBadge color="tip" variant="solid">Рекомендовано</DyvoBadge>
```

Передати зображення через слот `image` у вигляді тегу `img`:

<div style="margin: 16px 0;">
  <DyvoBadge text="Слот з img" image-alt="Логотип проєкту">
    <template #image>
      <img src="/images/simple-logo.svg" alt="Логотип проєкту" />
    </template>
  </DyvoBadge>
</div>

```html
<DyvoBadge text="Слот з img" image-alt="Логотип проєкту">
  <template #image>
    <img src="/images/simple-logo.svg" alt="Логотип проєкту" />
  </template>
</DyvoBadge>
```

Або, наприклад, коду SVG:

<div style="margin: 16px 0;">
  <DyvoBadge text="Слот з SVG" image-alt="Логотип проєкту">
    <template #image>
      <svg width="32" height="32" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect style="fill:#4400aa" width="32" height="32" x="0" y="0" />
        <path style="fill:none;stroke:#ffffff;stroke-width:2.52;stroke-linecap:butt;stroke-linejoin:bevel" d="m -1.0978942,17.991324 c 10.3148113,1.663511 11.8259462,-6.525645 19.7029652,-3.995225 -2.516126,-0.898775 -8.580151,-1.224087 -8.496544,6.212089 0.02532,2.259723 1.727747,4.948781 5.290295,4.248272 1.234768,-0.242797 2.821112,-1.341713 3.063584,-3.227845 C 19.004469,17.012022 19.377112,11.24108 20.7292,4.6980033 19.377864,11.220191 19.083461,16.14399 18.46479,21.270261 c -0.503841,2.719424 1.795631,3.583091 4.42593,3.24533 2.674227,-0.343408 4.954594,-2.688828 9.650598,-3.899747" />
      </svg>
    </template>
  </DyvoBadge>
</div>

```html
<DyvoBadge text="Слот з SVG" image-alt="Логотип проєкту">
  <template #image>
    <svg width="32" height="32" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect style="fill:#4400aa" width="32" height="32" x="0" y="0" />
      <path style="fill:none;stroke:#ffffff;stroke-width:2.52;stroke-linecap:butt;stroke-linejoin:bevel" d="m -1.0978942,17.991324 c 10.3148113,1.663511 11.8259462,-6.525645 19.7029652,-3.995225 -2.516126,-0.898775 -8.580151,-1.224087 -8.496544,6.212089 0.02532,2.259723 1.727747,4.948781 5.290295,4.248272 1.234768,-0.242797 2.821112,-1.341713 3.063584,-3.227845 C 19.004469,17.012022 19.377112,11.24108 20.7292,4.6980033 19.377864,11.220191 19.083461,16.14399 18.46479,21.270261 c -0.503841,2.719424 1.795631,3.583091 4.42593,3.24533 2.674227,-0.343408 4.954594,-2.688828 9.650598,-3.899747" />
    </svg>
  </template>
</DyvoBadge>
```

Розміри:

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

У `dyvo-vitepress-theme` Dyvo-бейджі також добре працюють у заголовках VitePress-документа, з вертикальним вирівнюванням по центру за замовчуванням:

<div style="display:grid; gap:8px; margin:16px 0;">
  <h1 style="margin:0; padding:0; border:0;">Заголовок першого рівня <DyvoBadge color="info" variant="solid">h1</DyvoBadge></h1>
  <h2 style="margin:0; padding:0; border:0;">Заголовок другого рівня <DyvoBadge>h2</DyvoBadge></h2>
  <h3 style="margin:0; padding:0; border:0;">Заголовок третього рівня <DyvoBadge color="warning">h3</DyvoBadge></h3>
</div>

```html
# Заголовок першого рівня <DyvoBadge color="info" variant="solid">h1</DyvoBadge>
## Заголовок другого рівня <DyvoBadge>h2</DyvoBadge>
### Заголовок третього рівня <DyvoBadge color="warning">h3</DyvoBadge>
```

І в текстових блоках, з baseline вирівнюванням за замовчуванням:

<div style="display:grid; gap:12px; margin:16px 0;">
  <p style="margin:0;">
    <DyvoBadge size="large" color="tip" variant="soft">large</DyvoBadge>
    Цей великий бейдж вирівнюється по базовій лінії тексту в абзаці.
  </p>
  <p style="margin:0;">
    У звичайному тексті <DyvoBadge color="info" variant="solid">medium</DyvoBadge> бейдж теж лишається природно вирівняним.
  </p>
</div>

```html
<DyvoBadge size="large" color="tip" variant="soft">large</DyvoBadge>
Цей великий бейдж вирівнюється по базовій лінії тексту в абзаці.

У звичайному тексті <DyvoBadge color="info" variant="solid">medium</DyvoBadge> бейдж теж лишається природно вирівняним.
```

Нижче наведено типові поєднання кольорів і варіантів:

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

`color`, `variant`, `size` і `verticalAlign` також можна передавати через атрибут `class` із префіксними назвами класів:

```html
<DyvoBadge class="color-success variant-solid size-medium vertical-align-middle">Вирівняний бейдж</DyvoBadge>
```

Оформлення бейджа також можна змінювати через CSS-змінні, передані в атрибуті `style`:

<div style="margin: 16px 0;">
  <DyvoBadge
    variant="accent"
    style="--dyvo-badge-current-text-color: #48a103; --dyvo-badge-current-bg-color: #48a10330;"
  >
    Кастомний зелений
  </DyvoBadge>
</div>

```html
<DyvoBadge
  variant="accent"
  style="--dyvo-badge-current-text-color: #48a103; --dyvo-badge-current-bg-color: #48a10330;"
>
  Кастомний зелений
</DyvoBadge>
```

## `DyvoUserBadge`

`DyvoUserBadge` обгортає `DyvoBadge` в UI-пакеті і додає дефолти для користувача або автора.

Він підтримує:

- обов’язковий `name`;
- опційний GitHub handle у `github`;
- опційний `href`, який перевизначає посилання;
- опційні `avatarSrc` і `avatarAlt`;
- опційний `text` для перевизначення видимого підпису;
- опційний base path через `base`;
- ті самі `color`, `variant`, `size`, `interactive` і `disabled`, що й `DyvoBadge`.

Якщо передано `github`:

- посиланням за замовчуванням стає `https://github.com/<handle>`;
- аватаром за замовчуванням стає `https://github.com/<handle>.png?size=80`.

Приклади:

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

## Порівняння з `Badge` у VitePress

`DyvoBadge` проєктувався так, щоб лишатися сумісним із типовими сценаріями використання стандартного `Badge` з VitePress, але водночас давати ширші можливості стилізації, посилань, розмірів і зображень.

Тому немає потреби змішувати `Badge` і `DyvoBadge` в одній документації, якщо ти не хочеш свідомо підтримувати дві різні візуальні системи.

Якщо потрібен один універсальний компонент, `DyvoBadge` можна використовувати і для простих inline-маркерів:

<div style="margin: 16px 0;">
  API Reference <DyvoBadge color="tip" variant="soft" size="small" text="stable" />
</div>

```html
API Reference <DyvoBadge color="tip" variant="soft" size="small" text="stable" />
```

Використовуй `DyvoBadge`, коли потрібні:

- один консистентний стиль бейджів по всьому сайту;
- сумісність із простими inline-бейджами;
- більші візуальні варіанти;
- інтерактивна поведінка бейджа;
- підтримка зображень;
- явне керування розміром;
- pill-like компонент, який може стояти окремо в контенті.

Якщо в markdown уже використовується стандартний `Badge` з VitePress, рекомендований шлях міграції — підключити окремий compatibility-wrapper, а не розширювати `DyvoBadge` legacy-пропсами.

Для цього пакет експортує компонент `Badge`, але він не реєструється автоматично. Його можна підключити вручну у своїй темі:

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

Такий wrapper зберігає VitePress-style API з пропом `type` і передає його в `DyvoBadge` через `color`, тому існуючий markdown може й далі використовувати, наприклад:

```html
API Reference <Badge type="tip" text="stable" />
```
