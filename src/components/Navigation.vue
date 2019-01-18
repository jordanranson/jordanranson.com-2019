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
  display: flex

.links
  margin-left: auto
</style>
