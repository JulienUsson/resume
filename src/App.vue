<template>
  <div id="app">
    <template v-if="loaded">
      <profil/>
      <div id="content">
        <experience/>
        <skills/>
        <education/>
        <projects/>
        <hobbies/>
        <contact/>
      </div>
      <credits/>
    </template>
    <template v-else>
      <div id="loading">Loading...</div>
    </template>
  </div>
</template>

<script>
import KonamiCode from 'konami-code';
import { mapGetters } from 'vuex';
import Profil from './components/Profil';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
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
  mounted() {
    this.$store.dispatch('getResumeData');

    const konami = new KonamiCode();
    konami.listen(() => {
      document.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });
  },
  components: {
    Profil,
    Experience,
    Skills,
    Education,
    Projects,
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

  #loading {
    background-color: $primary-color;
    height: 100%;
  }

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
