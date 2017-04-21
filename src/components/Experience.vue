<template>
  <div id="experience">

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'experiences',
    ]),
  },
};
</script>

<style>

</style>
