<template>
  <section class="content-section">
    <content-inner>
      <slot />
    </content-inner>
  </section>
</template>

<script>
import ContentInner from '@/components/ContentInner.vue'

export default {
  name: 'ContentSection',

  components: {
    ContentInner
  }
}
</script>

<style lang="sass" scoped>
</style>
