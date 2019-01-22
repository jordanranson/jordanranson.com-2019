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
.hero-section
  margin: $margin-lg 0
  padding-top: $margin

.title
  font-weight: normal
  font-size: $title-size-sm
  line-height: 1.5
  +desktop
    font-weight: 200
    font-size: $title-size
    line-height: 1.3
</style>
