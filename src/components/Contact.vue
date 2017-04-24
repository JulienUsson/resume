<template>
  <block title="Contact">
    <div id="contact">
      <div>
        <a :href="mailUrl" >
          <icon class="icon" name="envelope" scale="6"></icon>
        </a>
        <div>Contactez-moi par mail</div>
      </div>
      <div>
        <a :href="contact.github" target="_blank">
          <icon class="icon" name="github-alt" scale="6"></icon>
        </a>
        <div>Découvrez mon GitHub</div>
      </div>
      <div>
        <a :href="contact.linkedin" target="_blank">
          <icon class="icon" name="linkedin" scale="6"></icon>
        </a>
        <div>Retrouvez-moi sur LinkedIn</div>
      </div>
      <div>
        <a :href="contact.twitter" target="_blank">
          <icon class="icon" name="twitter" scale="6"></icon>
        </a>
        <div>Suivez-moi sur Twitter</div>
      </div>
    </div>
  </block>
</template>

<script>
import { mapGetters } from 'vuex';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/github-alt';
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/linkedin';
import 'vue-awesome/icons/twitter';
import Block from './Block';

export default {
  computed: {
    ...mapGetters([
      'contact',
    ]),
    mailUrl() {
      return `mailto:${this.contact.mail}`;
    },
  },
  components: {
    Block,
    Icon,
  },
};
</script>

<style lang="scss">
@import '../styles/variables';

#contact {
  display: flex;
  flex-flow: row wrap;

  >div {
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
  }

  .icon {
    color: $accent-color;
  }
}
</style>
