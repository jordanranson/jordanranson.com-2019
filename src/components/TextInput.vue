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
    type: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
.text-input

.input
</style>
