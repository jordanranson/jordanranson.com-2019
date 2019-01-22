<template>
  <button type="submit" class="submit-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SubmitButton'
}
</script>

<style lang="sass" scoped>
.submit-button
  height: 3rem
  display: inline-flex
  background: $light-purple
  color: $white
  font-size: $font-size
  font-family: 'Work Sans', 'Avenir', Helvetica, Arial, sans-serif
  border-radius: 4px
  border: none
  outline: none
  letter-spacing: -0.025em
  border: solid 2px $light-purple
  padding: 0 $margin-sm
  transition: border-color 150ms
  +box-shadow
  &:focus
    border-color: $accent
</style>
