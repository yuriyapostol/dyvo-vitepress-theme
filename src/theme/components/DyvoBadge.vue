<script lang="ts">
import { defineComponent, h } from 'vue'
import { DyvoBadge } from '@yuriyapostol/dyvo-vue-ui'

export default defineComponent({
  name: 'DyvoVitePressBadge',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(DyvoBadge, {
      ...attrs,
      base: typeof attrs.base === 'string' ? attrs.base : import.meta.env.BASE_URL
    }, slots)
  }
})
</script>
