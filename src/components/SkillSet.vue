<template>
  <div class="skill-set">
    <div class="skill-header">
      <h2 class="title is-small">My Skills</h2>
      <div class="skill-filters">
        <a :class="{ 'is-active': !filter }" @click="filter = false">All</a>
        <a :class="{ 'is-active': filter === 'web' }" @click="filter = 'web'">Web</a>
        <a :class="{ 'is-active': filter === 'design' }" @click="filter = 'design'">Design</a>
        <a :class="{ 'is-active': filter === 'games' }" @click="filter = 'games'">Games</a>
        <div class="filter-border" :style="filterBorderStyle"></div>
      </div>
    </div>
    <transition-group class="skills" name="skills" tag="div">
      <skill v-for="(skill, i) in filteredSkills" :name="skill[0]" :icon="skill[2]" :key="'skill'+i" />
    </transition-group>
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
      filter: false,
      borderStyle: {}
    }
  },

  computed: {
    filteredSkills () {
      const { filter } = this

      return this.skills.filter((skill) => {
        if (!filter) return true

        const type = skill[1]

        if (typeof type === 'string') {
          return type === filter
        }

        return type.includes(filter)
      })
    },

    filterBorderStyle () {
      const { borderStyle } = this

      return {
        width: `${borderStyle.width}px`,
        transform: `translateX(${borderStyle.left}px)`
      }
    }
  },

  mounted () {
    this.setBorderStyle()
  },

  methods: {
    setBorderStyle () {
      this.$nextTick(() => {
        const link = this.$el.querySelector('a.is-active')
        const linkRect = link.getBoundingClientRect()

        const filters = this.$el.querySelector('.skill-filters')
        const filtersRect = filters.getBoundingClientRect()

        this.$set(this, 'borderStyle', {
          left: Math.round(linkRect.left - filtersRect.left),
          width: Math.round(linkRect.width)
        })
      })
    }
  },

  watch: {
    filter () {
      this.setBorderStyle()
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
  position: relative
  margin-left: auto
  a
    display: inline-flex
    margin-left: $margin-sm
    cursor: pointer
    color: $font-color-light
    transition: all 150ms
    &:first-child
      margin-left: 0
    &.is-active
      cursor: default
      color: $font-color
  &:hover
    .filter-border
      border-bottom-color: $accent

.filter-border
  position: absolute
  bottom: -0.05em
  left: 0
  width: 50px
  transition: all 150ms
  border-bottom: solid 1px $font-color-light

.skills
  display: flex
  flex-wrap: wrap
  margin: -($margin-sm / 2)

.skills-enter-active,
.skills-leave-active
  transition: all 300ms

.skills-enter,
.skills-leave-to
  opacity: 0
  transform: scale(0.9)
</style>
