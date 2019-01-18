<template>
  <div class="section-title">
    <h3 class="title"><slot /></h3>
    <hr class="rule" />
  </div>
</template>

<script>
export default {
  name: 'SectionTitle'
}
</script>

<style lang="sass" scoped>
.section-title
  text-align: center
</style>
