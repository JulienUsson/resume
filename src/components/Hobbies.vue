<template>
  <block id="hobbies" title="Centres d'intérêt">
  
  </block>
</template>

<script>
import { mapGetters } from 'vuex';
import Block from './Block';

export default {
  computed: {
    ...mapGetters([
      'hobbies',
    ]),
  },
  components: {
    Block,
  },
};
</script>

<style>

</style>
