<template>
  <div class="box" :style="{ backgroundImage }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Box',

  props: {
    bgUrl: {
      type: String
    }
  },

  computed: {
    backgroundImage () {
      return this.bgUrl && `url("${this.bgUrl}")`
    }
  }
}
</script>

<style lang="sass" scoped>
.box
  width: 100px
  height: 100px
  border-radius: 10px

  background-color: $white
  background-repeat: no-repeat
  background-size: cover
  background-position: 50% 50%
</style>
