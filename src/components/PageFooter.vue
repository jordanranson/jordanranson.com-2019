<template>
  <footer class="page-footer faded">
    <content-inner class="page-footer-inner">
      <div class="footer-left">&copy; {{ currentYear }} Jordan Ranson</div>
      <div class="footer-right">Check out the source for this page on <a class="link" href="//github.com/jordanranson/jordanranson.com-2019" target="_blank">GitHub</a>.</div>
    </content-inner>
  </footer>
</template>

<script>
import ContentInner from '@/components/ContentInner.vue'

export default {
  name: 'PageFooter',

  components: {
    ContentInner
  },

  computed: {
    currentYear () {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<style lang="sass" scoped>
.page-footer
  font-size: $font-size-sm
  padding: $margin-lg 0 $margin-sm 0
  text-align: center
  +desktop
    text-align: left
    padding-bottom: $margin

.page-footer-inner
  +desktop
    display: flex

.footer-right
  margin-top: $margin-sm
  +desktop
    margin-left: auto
    margin-top: 0
</style>
