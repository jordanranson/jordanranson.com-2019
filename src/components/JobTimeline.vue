<template>
  <div class="job-timeline">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'JobTimeline'
}
</script>

<style lang="sass" scoped>
.job-timeline
  position: relative
</style>
