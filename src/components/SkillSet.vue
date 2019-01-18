<template>
  <div class="skill-set">
    <div class="skill-header">
      <h2 class="title is-small">My Skills</h2>
      <div class="skill-filters">
        <a :class="{ 'is-active': !filter }" @click="filter(false)">All</a>
        <a :class="{ 'is-active': filter === 'web' }" @click="filter('web')">Web</a>
        <a :class="{ 'is-active': filter === 'design' }" @click="filter('design')">Design</a>
        <a :class="{ 'is-active': filter === 'games' }" @click="filter('games')">Games</a>
      </div>
    </div>
    <div class="skills">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillSet'
}
</script>

<style lang="sass" scoped>
.skill-header
  display: flex
  align-items: center

.skill-filters
  margin-left: auto

.skills
  display: flex
  flex-wrap: wrap
</style>
