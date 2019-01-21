<template>
  <box class="skill">
    <div class="skill-inner">
      <span class="skill-icon"></span><br />
      <span class="skill-name"><small>{{ name }}</small></span>
    </div>
  </box>
</template>

<script>
import Box from '@/components/Box.vue'

export default {
  name: 'Profile',

  components: {
    Box
  },

  props: {
    name: {
      type: String
    },

    icon: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
$skill-width: calc((100vw - 4rem) / 3)

.skill
  display: flex
  text-align: center
  margin: ($margin-sm / 2)
  width: $skill-width
  height: $skill-width
  +desktop
    width: 106px
    height: 106px
  +wide-screen
    width: 100px
    height: 100px

.skill-inner
  margin: auto

.skill-icon
  width: 24px
  height: 24px
  display: inline-flex
  background: #cbcbcb

.skill-name
  display: inline-flex
</style>
