<template>
  <div class="contact-form">

    <!-- <div v-if="success" class="form">
      <p>Success!</p>
    </div>
    <form v-else ref="form" class="form" @submit="submitForm">
      <input name="_formsubmit_id" type="text" style="display:none">
      <div class="field">
        <text-input name="name" type="text" placeholder="Your Name" />
      </div>
      <div class="field">
        <text-input name="email" type="email" placeholder="Your Email" />
      </div>
      <div class="field">
        <text-input name="message" type="multi-line" placeholder="Your Message" />
      </div>
      <div class="field">
        <submit-button class="form-button">Send Message</submit-button>
      </div>
    </form> -->

    <div class="contact-info" style="display:flex;width:100%">
      <div style="flex:1">
        <h4 class="title is-small">Email</h4>
        <p><a class="faded">jordan@jordanranson.com</a></p>
      </div>
      <!-- <br /> -->
      <div style="flex:1">
        <h4 class="title is-small">Twitter</h4>
        <p><a class="link faded" href="">@jordanranson</a></p>
      </div>
    </div>

  </div>
</template>

<script>
// import SubmitButton from '@/components/SubmitButton.vue'
// import TextInput from '@/components/TextInput.vue'

export default {
  name: 'ContactForm',

  // components: {
  //   SubmitButton,
  //   TextInput
  // },

  data () {
    return {
      success: false
    }
  },

  methods: {
    submitForm (evt) {
      evt.preventDefault()

      const formData = new FormData(this.$refs.form)
      const data = {}
      formData.forEach((value, key) => {
        data[key] = value
      })

      fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(() => {
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.contact-form
  display: flex
  flex-direction: column
  +desktop
    flex-direction: row

.form
  order: 0
  +desktop
    min-width: 60%
    margin-right: $margin-md

.form-button
  margin-left: auto

.field
  width: 100%
  display: flex
  flex-direction: column
  margin-bottom: $margin-sm
  +desktop
    margin-bottom: $margin

.contact-info
  order: -1
  margin-bottom: $margin
  p,
  h4
    margin-bottom: $margin-sm
  +desktop
    order: 1

.field
  // todo
</style>
