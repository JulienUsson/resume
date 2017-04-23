<template>
  <block id="contact" title="Contact">
  
  </block>
</template>

<script>
import { mapGetters } from 'vuex';
import Block from './Block';

export default {
  computed: {
    ...mapGetters([
      'contact',
    ]),
  },
  components: {
    Block,
  },
};
</script>

<style>

</style>
