<template>
  <div class="content-inner">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContentInner'
}
</script>

<style lang="sass" scoped>
.content-inner
  position: relative
  padding: $margin-sm
  +desktop
    max-width: 800px
    margin: 0 auto
  +wide-screen
    max-width: 1000px
</style>
