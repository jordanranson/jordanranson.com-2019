<template>
  <header class="hero-section">
    <content-inner>
      <h1 class="title">
        <slot />
      </h1>
    </content-inner>
  </header>
</template>

<script>
import ContentInner from '@/components/ContentInner.vue'

export default {
  name: 'HeroSection',

  components: {
    ContentInner
  }
}
</script>

<style lang="sass" scoped>
.title
  font-weight: 200
</style>
