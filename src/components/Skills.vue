<template>
  <block title="Compétences">
    <div id="skills">
      <div v-for="skill in skills">
        <h2>{{skill.title}}</h2>
        <template v-for="item in skill.items">
          <list-item><span class="title">{{item.title}}</span> <span class="description" v-if="item.description">({{item.description}})</span></list-item>
        </template>
      </div>
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
      'skills',
    ]),
  },
  components: {
    Block,
    ListItem,
  },
};
</script>

<style lang="scss">
@import '../styles/variables';

#skills {
  display: flex;
  flex-flow: row wrap;

  >div {
    margin-right: 30px;
  }

  h2 {
    margin-bottom: 15px;
    height: 24px;
    line-height: 24px;
    color: $primary-color;
  }

  .title {
    font-weight: bold;
  }

  .description {
    font-size: 0.8em;
  }
}
</style>
