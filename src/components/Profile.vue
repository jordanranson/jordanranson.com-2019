<template>
  <div class="profile">
    <div class="profile-header">
      <div class="profile-photo">
        <box :bg-url="photoUrl" />
      </div>
      <div class="profile-info">
        <div class="profile-info-inner">
          <h4 class="title is-small">Jordan Ranson</h4>
          <p class="faded">{{ location }}</p>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import Box from '@/components/Box.vue'

export default {
  name: 'Profile',

  components: {
    Box
  },

  props: {
    photoUrl: {
      type: String
    },

    location: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
.profile-header
  display: flex
  margin-bottom: $margin

.profile-photo
  margin-right: $margin-sm

.profile-info
  display: flex

.profile-info-inner
  margin: auto
</style>
