<script>
export default {
  name: 'Skills',

  props: {
    children: {
      type: Array
    }
  },

  render (h) {
    return h('div', {}, [this.children])
  }
}
</script>
