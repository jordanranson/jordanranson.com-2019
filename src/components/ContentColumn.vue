<template>
  <div class="content-column">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContentColumn'
}
</script>

<style lang="sass" scoped>
.content-column
  flex: 1
  margin-bottom: $margin-md
  &:last-child
    margin-bottom: 0
  +desktop
    margin-bottom: 0
    margin-right: $margin-md
    &:last-child
      margin-right: 0
</style>
