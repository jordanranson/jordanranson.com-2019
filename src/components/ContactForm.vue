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
      <div class="field">
        <submit-button class="form-button">Send Message</submit-button>
      </div>
    </form>

    <div class="contact-info">
      <h4 class="title is-small">Email</h4>
      <p><a class="faded">jordan@jordanranson.com</a></p>
      <br />

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
