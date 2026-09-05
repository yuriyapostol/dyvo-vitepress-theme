<script lang="ts">
import { defineComponent, h } from 'vue'
import type { Component } from 'vue'
import { DyvoUserBadge } from '@yuriyapostol/dyvo-vue-ui'

const DyvoUserBadgeComponent = DyvoUserBadge as Component

export default defineComponent({
  name: 'DyvoVitePressUserBadge',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(DyvoUserBadgeComponent, {
      ...attrs,
      base: typeof attrs.base === 'string' ? attrs.base : import.meta.env.BASE_URL
    }, slots)
  }
})
</script>
