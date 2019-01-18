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
  @media screen and (min-width: 768px)
    display: flex
</style>
