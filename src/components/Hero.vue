<template>
  <div id="hero">
    <div>
      <img :src="gravatar" />
    </div>
    <h2>{{profil.name}}</h2>
    <pre>{{profil.description}}</pre>
  </div>
</template>

<script>
import md5 from 'js-md5';
import { mapGetters } from 'vuex';

export default {
  name: 'hero',
  computed: {
    ...mapGetters([
      'profil',
    ]),
    gravatar() {
      const hash = md5(this.$store.getters.contact.mail);
      return `https://www.gravatar.com/avatar/${hash}?size=150`;
    },
  },
};
</script>

<style>
#hero {
  height: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  background-color: #40C4FF;
  color: #212121;
  font-weight: bold;
  text-align: center;
}

#hero img {
  border-radius: 50%;
  height: 150px;
  width: 150px;
}
</style>
