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
</style>
