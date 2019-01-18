<template>
  <div id="app">

    <navigation>
      <a href="" class="link">Dribbble</a>
      <a href="" class="link">GitHub</a>
      <a href="#contact" class="link">Contact Me</a>
    </navigation>

    <hero-section>
      Hi, my name is <strong>Jordan</strong>.<br />
      I’m a <strong>UX</strong>/<strong>UI designer</strong> and <strong>developer</strong>.<br />
      I make <strong>apps</strong> and <strong>games</strong>.
    </hero-section>

    <!-- About section -->

    <content-section>
      <content-columns>

        <!-- Biography -->
        <content-column>
          <profile photo-url="//avatars0.githubusercontent.com/u/753511" location="Alberta, Canada" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur rutrum ut nisi id pharetra. Maecenas in lobortis metus.
            Nam non tincidunt eros, ac tincidunt ante. Phasellus quis dui.
          </p>
        </content-column>

        <!-- Skills -->
        <content-column>
          <skill-set>
            <!-- Software -->
            <skill name="Photoshop" type="design" icon="" />
            <skill name="Sketch" type="design" icon="" />
            <skill name="Unity" type="games" icon="" />
            <skill name="Love2D" type="games" icon="" />

            <!-- Languages -->
            <skill name="Lua" type="games" icon="" />
            <skill name="C#" :type="[ 'web', 'games' ]" icon="" />
            <skill name="SASS/CSS" type="web" icon="" />
            <skill name="JavaScript" type="web" icon="" />

            <!-- Technologies -->
            <skill name="NodeJS" type="web" icon="" />
            <skill name="VueJS" type="web" icon="" />
            <skill name="React" type="web" icon="" />
            <skill name="Cordova" type="web" icon="" />

            <!-- Skills -->
            <skill name="UI/UX" :type="[ 'web', 'games', 'design' ]" icon="" />
            <skill name="SEO" type="web" icon="" />
          </skill-set>
        </content-column>

      </content-columns>
    </content-section>

    <section-title>Projects</section-title>

    <!-- Messaging CRM -->

    <content-section>
      <project title="Project Title" category="Lorem Ipsum">
        <template slot="pictures">
          <img />
        </template>
        <template slot="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur rutrum ut nisi id pharetra. Maecenas in lobortis metus.
        </template>
        <template slot="tools-used">
          <li>Lorem ipsum</li>
          <li>Dolor sit amet</li>
        </template>
        <template slot="subtitle">
          Check out my <a>Dribbble</a>.
        </template>
      </project>
    </content-section>

    <section-rule />

    <!-- Animeta or Anchors Away -->

    <content-section>
      <project title="Project Title" category="Lorem Ipsum">
        <template slot="pictures">
          <img />
        </template>
        <template slot="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur rutrum ut nisi id pharetra. Maecenas in lobortis metus.
        </template>
        <template slot="tools-used">
          <li>Lorem ipsum</li>
          <li>Dolor sit amet</li>
        </template>
        <template slot="subtitle">
          Check out my <a>Dribbble</a>.
        </template>
      </project>
    </content-section>

    <section-rule />

    <!-- Spores game -->

    <content-section>
      <project title="Project Title" category="Lorem Ipsum">
        <template slot="pictures">
          <img />
        </template>
        <template slot="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur rutrum ut nisi id pharetra. Maecenas in lobortis metus.
        </template>
        <template slot="tools-used">
          <li>Lorem ipsum</li>
          <li>Dolor sit amet</li>
        </template>
        <template slot="subtitle">
          Check out my <a>Dribbble</a>.
        </template>
      </project>
    </content-section>

    <section-title>Experience</section-title>

    <content-section>
      <job-timeline>
        <job title="UX Designer" company="Gabbi">
          Designed and implemented real-estate apps.
        </job>
        <job title="Front-End Developer" company="Scarf">
          Helped create a food-sharing mobile app.
        </job>
        <job title="UX Designer" company="SAM">
          Designed a social media CRM for newsrooms and journalists.
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
import Profile from './components/Profile.vue'
import Project from './components/Project.vue'
import SectionRule from './components/SectionRule.vue'
import SectionTitle from './components/SectionTitle.vue'
import Skill from './components/Skill.vue'
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
    Profile,
    Project,
    SectionRule,
    SectionTitle,
    Skill,
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
</style>
