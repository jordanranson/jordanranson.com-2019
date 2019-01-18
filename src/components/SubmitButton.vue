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
  display: inline-flex
</style>
