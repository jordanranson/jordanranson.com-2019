<template>
  <div id="app">

    <navigation>
      <a href="//dribbble.com/jordanranson" class="link is-hidden-mobile" target="_blank">Dribbble</a>
      <a href="//github.com/jordanranson" class="link is-hidden-mobile" target="_blank">GitHub</a>
      <a href="#contact" class="link">Contact Me</a>
    </navigation>

    <hero-section>
      Hi, my name is <strong>Jordan</strong>.<br class="is-hidden-mobile" />
      I’m a <strong>UX</strong>/<strong>UI designer</strong> and <strong>developer</strong>.<br class="is-hidden-mobile" />
      I make <strong>apps</strong> and <strong>games</strong>.
    </hero-section>

    <!-- About section -->

    <content-section>
      <content-columns>

        <!-- Biography -->
        <content-column>
          <profile photo-url="//avatars0.githubusercontent.com/u/753511" location="Alberta, Canada" />
          <p>
            Over the past decade I've honed a passion for technology into a diverse set of
            user-experience related skills. I typically work on web-based applications,
            both mobile and desktop, designing workflows and interfaces, and helping
            implement these concepts in code. Even so, I'm open to new experiences
            and love exploring new technologies and industries.
            <br /><br />
            When I'm not working on side-projects or attending game-jams and hack-a-thons,
            I enjoy exploring the city on bicycle, mixing new and unsual cocktails, or taking
            it easy around the house with my cats.
          </p>
        </content-column>

        <!-- Skills -->
        <content-column>
          <skill-set :skills="[
            // Software
            [ 'Photoshop', 'design', '' ],
            [ 'Sketch', 'design', '' ],
            [ 'Unity', 'games', '' ],
            [ 'Love2D', 'games', '' ],

            // Languages
            [ 'Lua', 'games', '' ],
            [ 'C#', [ 'web', 'games' ], '' ],
            [ 'SASS/CSS', 'web', '' ],
            [ 'JavaScript', 'web', '' ],

            // Technologies
            [ 'NodeJS', 'web', '' ],
            [ 'VueJS', 'web', '' ],
            [ 'React', 'web', '' ],
            [ 'Cordova', 'web', '' ],
            [ 'HTML5', 'web', '' ],

            // Skills
            [ 'UI/UX', [ 'web', 'games', 'design' ], '' ],
            [ 'SEO', 'web', '' ],
          ]" />
        </content-column>

      </content-columns>
    </content-section>

    <section-title>Projects</section-title>

    <!-- Messaging CRM -->

    <content-section>
      <project title="Gabbi" category="Mobile App, Front-End, UI/UX">
        <template slot="pictures">
          <img :src="require('./assets/Gabbi.ai.png')" />
        </template>
        <template slot="description">
          Gabbi is a real-time messaging app for real-estate professionals. The
          hybrid mobile app, built with VueJS and Cordova, gives agents a way to
          manage their clients using CRM-like features without having to manage
          a full-blown CRM.
          <br /><br />
          Backed by a machine-learning system, Gabbi is able to
          automatically notify the agent of important events as well as categorize,
          reply-to and follow-up with prospective and existing clients and leads.
          <br /><br />
          <span class="faded">
            Like what you see? Check out more on my <a href="//dribbble.com/jordanranson" class="link" target="_blank">Dribbble</a> page.
          </span>
        </template>
        <template slot="tools-used">
          <li>VueJS</li>
          <li>SASS/CSS</li>
          <li>Sketch</li>
          <li>Cordova</li>
        </template>
        <template slot="subtitle">
          <a class="link" href="//www.gabbi.ai" target="_blank">Visit Website</a>
        </template>
      </project>
    </content-section>

    <section-rule />

    <!-- Animeta or Anchors Away -->

    <content-section>
      <project title="Animeta" category="JavaScript Library, Front-End">
        <template slot="pictures">
          <img :src="require('./assets/Animeta.png')" />
        </template>
        <template slot="description">
          The built-in transition system in VueJS is a breeze to use, but there
          is only so much you can do with CSS transitions. I wanted something more
          robust, but with same ease of use. Enter: Animeta.
          <br /><br />
          This VueJS library marries the awesome power of AnimeJS with Vue's
          great built-in transition system, allowing developers to effortlessly
          implement impressive animations and transitions in their Vue-based apps.
          <br /><br />
          <span class="faded">
            Think this is cool? I've got more on my <a href="//github.com/jordanranson" class="link" target="_blank">GitHub</a> page.
          </span>
        </template>
        <template slot="tools-used">
          <li>JavaScript</li>
          <li>VueJS</li>
          <li>AnimeJS</li>
        </template>
        <template slot="subtitle">
          <a class="link" href="//github.com/jordanranson/animeta" target="_blank">Visit Website</a>
        </template>
      </project>
    </content-section>

    <section-rule />

    <!-- Spores game -->

    <content-section>
      <project title="Pods" category="Video Game, Game Design">
        <template slot="pictures">
          <img :src="require('./assets/Pods.png')" />
        </template>
        <template slot="description">
          A game that's like checkers, but isn't. The goal is to spread your pods
          across the board, leaving as little space for your opponent as possible.
          <br /><br />
          Tap your pods to duplicate or jump. Landing adjacent to an opponents
          pod will convert them to your color. The side with the most pods of their color
          when the board is filled, wins.
        </template>
        <template slot="tools-used">
          <li>Lua</li>
          <li>PICO-8</li>
        </template>
        <template slot="subtitle">
          <a class="link" href="//www.lexaloffle.com/bbs/?tid=" target="_blank">Visit Website</a>
        </template>
      </project>
    </content-section>

    <section-title>Experience</section-title>

    <content-section>
      <job-timeline>
        <job title="UX Designer" company="Gabbi">
          Designed and implemented real-estate apps and websites.
        </job>
        <job title="Front-End Developer" company="Scarf">
          Helped create a food-sharing mobile app.
        </job>
        <job title="UX Designer" company="SAM">
          Designed a social media CMS for newsrooms and journalists.
        </job>
        <job title="UX Designer" company="Hungry Moose Games">
          Created user interfaces for Unity mobile games.
        </job>
        <job title="Front-End Developer" company="General Electric">
          Worked on remote monitoring software for PLCs.
        </job>
      </job-timeline>
    </content-section>

    <section-title>Contact Me</section-title>

    <content-section>
      <contact-form />
    </content-section>

    <!-- Footer -->

    <page-footer />

  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue'
import ContentColumn from './components/ContentColumn.vue'
import ContentColumns from './components/ContentColumns.vue'
import ContentSection from './components/ContentSection.vue'
import HeroSection from './components/HeroSection.vue'
import Job from './components/Job.vue'
import JobTimeline from './components/JobTimeline.vue'
import Navigation from './components/Navigation.vue'
import PageFooter from './components/PageFooter.vue'
import Profile from './components/Profile.vue'
import Project from './components/Project.vue'
import SectionRule from './components/SectionRule.vue'
import SectionTitle from './components/SectionTitle.vue'
import SkillSet from './components/SkillSet.vue'

export default {
  name: 'App',

  components: {
    ContactForm,
    ContentColumn,
    ContentColumns,
    ContentSection,
    HeroSection,
    Job,
    JobTimeline,
    Navigation,
    PageFooter,
    Profile,
    Project,
    SectionRule,
    SectionTitle,
    SkillSet
  }
}
</script>

<style lang="sass">
@import "@/styles/reset.sass"
@import "@/styles/styles.sass"
@import url("https://fonts.googleapis.com/css?family=Work+Sans:200,400,600")

#app
  font-family: 'Work Sans', 'Avenir', Helvetica, Arial, sans-serif

.is-hidden-mobile
  display: none
  +desktop
    display: inline-flex
</style>
