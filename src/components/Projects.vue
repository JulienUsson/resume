<template>
  <block title="Projets personnels">
    <div id="projects">
      <template v-for="project in projects">
        <list-item>
          <a class="title" :href="project.link" target="_blank">{{project.title}}</a> <span class="description" v-html="project.description"></span><br/>
          <template v-for="skill in project.skills">
            <chips>{{skill}}</chips>
          </template>
        </list-item>
      </template>
    </div>
  </block>
</template>

<script>
import { mapGetters } from 'vuex';
import Block from './Block';
import ListItem from './ListItem';
import Chips from './Chips';

export default {
  computed: {
    ...mapGetters([
      'projects',
    ]),
  },
  components: {
    Block,
    ListItem,
    Chips,
  },
};
</script>

<style>
#projects .title {
  font-weight: bold;
  font-size: 1em;
}

#projects .description {
  font-size: 0.9em;
}
</style>
