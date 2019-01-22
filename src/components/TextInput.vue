<template>
  <div class="text-input">
    <textarea v-if="type === 'multi-line'" class="input" :name="name" :placeholder="placeholder">
    </textarea>
    <input v-else class="input" :type="type" :name="name" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'TextInput',

  props: {
    name: {
      type: String
    },

    type: {
      type: String
    },

    placeholder: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
.text-input

.input
  width: 100%
  background: $white
  color: $font-color
  font-size: $font-size
  font-family: 'Work Sans', 'Avenir', Helvetica, Arial, sans-serif
  border-radius: 4px
  border: none
  outline: none
  letter-spacing: -0.025em
  +box-shadow
  border: solid 2px $white
  transition: border-color 150ms
  &:focus
    border-color: $accent

input
  height: 3rem
  padding: 0 $margin-sm

textarea
  height: 7rem
  padding: $margin-sm
  resize: vertical
  +desktop
    height: 9rem
</style>
