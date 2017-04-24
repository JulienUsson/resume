<template>
  <block id="experience" title="Expérience professionnelle">
    <timeline>
      <template v-for="experience in experiences">
        <timeline-title>{{experience.title}}</timeline-title>
        <timeline-item v-for="experienceItem in experience.items">
          <b>{{experienceItem.date}}</b> - {{experienceItem.title}}
          <br/>
          <template v-for="skill in experienceItem.skills">
            <chips>{{skill}}</chips>
          </template>
        </timeline-item>
      </template>
    </timeline>
  </block>
</template>

<script>
import { mapGetters } from 'vuex';
import { Timeline, TimelineTitle, TimelineItem } from './Timeline';
import Block from './Block';
import Chips from './Chips';

export default {
  computed: {
    ...mapGetters([
      'experiences',
    ]),
  },
  components: {
    Block,
    Chips,
    Timeline,
    TimelineTitle,
    TimelineItem,
  },
};
</script>

<style>

</style>
