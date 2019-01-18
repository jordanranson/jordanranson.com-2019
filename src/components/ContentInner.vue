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
</style>
