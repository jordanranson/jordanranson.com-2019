export default {
  inject: [
    'app'
  ],

  data () {
    return {
      isInView: false,
      checkInterval: null,
      offsetTop: Number.MAX_VALUE
    }
  },

  mounted () {
    this.setOffsetTop()
    this.checkInterval = setInterval(this.checkInView.bind(this), 20)
  },

  destroyed () {
    clearInterval(this.checkInterval)
  },

  methods: {
    setOffsetTop () {
      let top = 0

      let el = this.$el

      do {
        if (!isNaN(el.offsetTop)) {
          top += el.offsetTop
        }
      } while (el = el.offsetParent) /* eslint-disable-line */

      this.offsetTop = top
    },

    checkInView () {
      this.isInView = (this.offsetTop - (window.innerHeight * 0.67)) <= this.app.scrollPos
    }
  }
}
