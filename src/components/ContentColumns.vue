<template>
  <div class="content-columns">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContentColumns'
}
</script>

<style lang="sass" scoped>
.content-columns
  position: relative
  +desktop
    display: flex
</style>
