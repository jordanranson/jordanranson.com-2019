<template>
  <div class="contact-form">

    <form ref="form" class="form" @submit="submitForm">
      <div class="field">
        <text-input name="name" type="text" />
      </div>
      <div class="field">
        <text-input name="email" type="email" />
      </div>
      <div class="field">
        <text-input name="message" type="multi-line" />
      </div>
      <submit-button>Send Message</submit-button>
    </form>

    <div class="contact-info">
      <h4 class="title is-small">Email</h4>
      <p><a class="faded">jordan@jordanranson.com</a></p>

      <h4 class="title is-small">Twitter</h4>
      <p><a class="link faded" href="">@jordanranson</a></p>
    </div>

  </div>
</template>

<script>
import SubmitButton from '@/components/SubmitButton.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'ContactForm',

  components: {
    SubmitButton,
    TextInput
  },

  methods: {
    submitForm (evt) {
      evt.preventDefault()
    }
  }
}
</script>

<style lang="sass" scoped>
.contact-form
  display: flex

.field
  // todo
</style>
