<template>
  <div id="app">
    <template v-if="loaded">
      <profil/>
      <experience/>
      <Skills/>
      <Education/>
      <Hobbies/>
      <Contact/>
      <Footer/>
    </template>
    <template v-else>
      Loading...
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Profil from './components/Profil';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'loaded',
    ]),
  },
  created() {
    this.$store.dispatch('getResumeData');
  },
  components: {
    Profil,
    Experience,
    Skills,
    Education,
    Hobbies,
    Contact,
    Footer,
  },
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  color: #212121;
}

pre {
  font-family: inherit;
  margin: 0;
}

h2 {
  margin: 0;
}
</style>
