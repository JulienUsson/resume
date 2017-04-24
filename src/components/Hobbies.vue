<template>
  <block title="Centres d'intérêt">
    <div id="hobbies">
      <template v-for="hobby in hobbies">
        <list-item><span class="title">{{hobby.title}}</span> <span class="description">{{hobby.description}}</span></list-item>
      </template>
    </div>
  </block>
</template>

<script>
import { mapGetters } from 'vuex';
import Block from './Block';
import ListItem from './ListItem';

export default {
  computed: {
    ...mapGetters([
      'hobbies',
    ]),
  },
  components: {
    Block,
    ListItem,
  },
};
</script>

<style>
#hobbies .title {
  font-weight: bold;
  font-size: 1em;
}

#hobbies .description {
  font-size: 0.9em;
}
</style>
