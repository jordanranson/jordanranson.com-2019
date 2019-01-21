<template>
  <div class="skill-set">
    <div class="skill-header">
      <h2 class="title is-small">My Skills</h2>
      <div class="skill-filters">
        <a :class="{ 'is-active': !filter }" @click="filter = false">All</a>
        <a :class="{ 'is-active': filter === 'web' }" @click="filter = 'web'">Web</a>
        <a :class="{ 'is-active': filter === 'design' }" @click="filter = 'design'">Design</a>
        <a :class="{ 'is-active': filter === 'games' }" @click="filter = 'games'">Games</a>
      </div>
    </div>
    <div class="skills">
      <skill v-for="(skill, i) in filteredSkills" :name="skill[0]" :icon="skill[2]" />
    </div>
  </div>
</template>

<script>
import Skill from '@/components/Skill.vue'

export default {
  name: 'SkillSet',

  components: {
    Skill
  },

  props: {
    skills: {
      type: Array
    }
  },

  data () {
    return {
      filter: false
    }
  },

  computed: {
    filteredSkills () {
      return this.skills.filter((skill) => {
        if (!this.filter) return true

        const type = skill[1]

        if (typeof type === 'string') {
          return type === this.filter
        }

        return type.includes(this.filter)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.skill-header
  display: flex
  align-items: center
  margin-bottom: $margin

.skill-filters
  margin-left: auto
  a
    display: inline-flex
    margin-left: $margin-sm
    border-bottom: solid 1px $dark-purple
    cursor: pointer
    &.is-active
      cursor: default
    &:not(.is-active)
      color: $font-color-light
      border: none

.skills
  display: flex
  flex-wrap: wrap
  margin: -($margin-sm / 2)
</style>
