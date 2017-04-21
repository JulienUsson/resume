<template>
  <div id="education">

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'educations',
    ]),
  },
};
</script>

<style>

</style>
