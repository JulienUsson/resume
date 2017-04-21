<template>
  <div id="hobbies">

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'hobbies',
    ]),
  },
};
</script>

<style>

</style>
