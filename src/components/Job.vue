<template>
  <div class="job">
    <div class="job-point"></div>
    <div class="job-details">
      <p><strong>{{ title }}</strong></p>
      <p>{{ company }}</p>
      <p class="faded"><small><slot /></small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Job',

  props: {
    title: {
      type: String
    },

    company: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
.job
  display: flex
  position: relative
  &:first-child
    .job-point::before
      top: 50%
  &:last-child
    .job-point::before
      bottom: 50%

.job-point
  position: relative
  padding: 2rem 4rem
  &::before,
  &::after
    left: 50%
    content: ''
    display: block
    position: absolute
  &::before
    top: 0
    bottom: 0
    width: 2px
    margin: 0 0 0 -1px
    opacity: 0.2
    background: $font-color-light
  &::after
    top: 50%
    width: 4px
    height: 4px
    margin: -2px 0 0 -2px
    background: $font-color
    border-radius: 10px
    box-shadow: 0 0 0 0.75rem $background

.job-details
  padding: 1rem 0
</style>
