<template>
  <div :class="{ 'box': true, 'has-shadow': hasShadow }" :style="{ backgroundImage }">
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
    },

    hasShadow () {
      return !this.bgUrl
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
  &.has-shadow
    +box-shadow
</style>
