<template>
  <div id="app" v-if="resume">
    <hero/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Hero from './components/Hero';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'resume',
    ]),
  },
  created() {
    this.$store.dispatch('getResumeData');
  },
  components: {
    Hero,
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
}

pre {
  font-family: inherit;
  margin: 0;
}

h2 {
    margin: 0;
}
</style>
