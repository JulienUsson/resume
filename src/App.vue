<template>
  <div id="app">
    <template v-if="loaded">
      <profil/>
      <div id="content">
        <experience/>
        <skills/>
        <education/>
        <hobbies/>
        <contact/>
      </div>
      <credits/>
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
import Credits from './components/Credits';

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
    Credits,
  },
};
</script>

<style lang="scss">
@import './styles/variables';

html,
body,
#app {
  margin: 0;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  color: $text-color;

  #content {
    padding: 30px 0 60px 0;
  }
}

p {
  margin: 0;
}

pre {
  font-family: inherit;
  margin: 0;
  white-space: pre-wrap;
}

h2 {
  margin: 0;
}

a {
  color: $text-color;
}
</style>
