<template>
  <div class="block">
    <h1 class="block-title">{{title}}</h1>
    <slot/>
  </div>
</template>

<script>
export default {
  props: [
    'title',
  ],
};
</script>

<style lang="scss">
@import '../styles/variables';

.block {
  width: 90%;
  margin: 10px auto;

  .block-title {
    color: $primary-color;
    padding-bottom: 10px;
    border-bottom: 3px dashed $accent-color;
  }
  
}
</style>
