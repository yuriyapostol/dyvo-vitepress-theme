import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './components/Layout.vue'
import DyvoBadge from './components/DyvoBadge.vue'
import DyvoUserBadge from './components/DyvoUserBadge.vue'
import Comments from '../features/comments/Comments.vue'
import NewsArchiveLinks from '../features/news/NewsArchiveLinks.vue'
import NewsList from '../features/news/NewsList.vue'
import NewsMeta from '../features/news/NewsMeta.vue'
import NewsMetaAuthors from '../features/news/NewsMetaAuthors.vue'
import NewsMetaPublishedAt from '../features/news/NewsMetaPublishedAt.vue'
import NewsMetaStatuses from '../features/news/NewsMetaStatuses.vue'
import { defineComponent, h } from 'vue'
import './styles/base.css'

const ThemeLayout = defineComponent({
  name: 'DyvoThemeLayout',
  setup(_, { slots }) {
    return () =>
      h(Layout, null, {
        ...slots,
        'doc-after': () => [slots['doc-after']?.(), h(Comments)]
      })
  }
})

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DyvoBadge', DyvoBadge)
    app.component('DyvoUserBadge', DyvoUserBadge)
    app.component('NewsArchiveLinks', NewsArchiveLinks)
    app.component('NewsList', NewsList)
    app.component('NewsMeta', NewsMeta)
    app.component('NewsMetaAuthors', NewsMetaAuthors)
    app.component('NewsMetaPublishedAt', NewsMetaPublishedAt)
    app.component('NewsMetaStatuses', NewsMetaStatuses)
  },
  Layout: ThemeLayout
}

export default theme
