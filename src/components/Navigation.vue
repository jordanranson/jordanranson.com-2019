<template>
  <nav class="navigation">
    <div class="masthead">
      <a href="#"><strong>Jordan Ranson</strong></a>
    </div>
    <div class="links">
      <slot />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="sass" scoped>
.navigation
  top: 0
  width: 100%
  display: flex
  position: fixed
  padding: $margin-sm
  z-index: 10
  background: linear-gradient(to bottom, rgba($background, 1), rgba($background, 0))
  pointer-events: none
  +desktop
    padding: $margin

a
  pointer-events: auto

.links
  margin-left: auto
  a
    margin-left: $margin-sm
</style>
