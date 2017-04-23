<template>
  <block id="skills" title="Compétences">
  
  </block>
</template>

<script>
import { mapGetters } from 'vuex';
import Block from './Block';

export default {
  computed: {
    ...mapGetters([
      'skills',
    ]),
  },
  components: {
    Block,
  },
};
</script>

<style>

</style>
