<template>
  <div class="project">
    <div class="project-pictures">
      <slot name="pictures" />
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
        <ul>
          <slot name="tools-used" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',

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
  height: 500px
  background: #cbcbcb
  border-radius: 10px

.project-details
  display: flex
</style>
