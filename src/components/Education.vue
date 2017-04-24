<template>
  <block id="education" title="Formation">
    <timeline>
      <timeline-item v-for="education in educations">
        <b>{{education.date}}</b> - <span v-html="education.title"></span>
      </timeline-item>
    </timeline>
  </block>
</template>

<script>
import { mapGetters } from 'vuex';
import { Timeline, TimelineItem } from './Timeline';
import Block from './Block';

export default {
  computed: {
    ...mapGetters([
      'educations',
    ]),
  },
  components: {
    Block,
    Timeline,
    TimelineItem,
  },
};
</script>

<style>

</style>
