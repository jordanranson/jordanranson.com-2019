<template>
  <div class="project">
    <div class="project-pictures">
      <div class="pictures-inner" :style="{ opacity: isInView ? 1 : 0 }">
        <slot name="pictures" />
      </div>
      <div class="more-link">
        <slot name="more-link" />
      </div>
    </div>
    <div class="project-details">
      <div class="project-title">
        <h2 class="title">{{ title }}</h2>
        <p class="faded"><small><slot name="subtitle" /></small></p>
      </div>
      <div class="project-description">
        <p>
          <slot name="description" />
        </p>

        <h4 class="title is-small">Category</h4>
        <p>
          {{ category }}
        </p>

        <h4 class="title is-small">Tools Used</h4>
        <ul class="tools-used">
          <slot name="tools-used" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import isInView from '@/mixins/is-in-view.js'

export default {
  name: 'Project',

  mixins: [
    isInView
  ],

  props: {
    title: {
      type: String
    },

    category: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
.project-pictures
  width: 100%
  margin-bottom: $margin

.pictures-inner
  width: 100%
  height: calc(62.5vw - 2rem)
  border-radius: 10px
  opacity: 0
  overflow: hidden
  transition: opacity 600ms
  /deep/ img
    width: 100%
    height: auto
  +desktop
    width: 800px
    height: 500px
    margin-bottom: $margin-md
  +wide-screen
    width: 1200px
    height: 750px
    margin-left: -100px

.project-details
  +desktop
    display: flex

.project-title
  margin-bottom: $margin
  .title
    font-size: $title-size-sm
  +desktop
    min-width: 25%
    margin-bottom: 0
    margin-right: $margin-md
    .title
      font-size: $title-size
  +wide-screen
    min-width: 30%

.project-description
  .title
    margin: $margin 0

.tools-used
  li
    display: inline
    &:not(:last-child)::after
      content: ', '

</style>
