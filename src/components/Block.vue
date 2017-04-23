<template>
  <div class="block">
    <h2>{{title}}</h2>
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
  .block {
    width: 90%;
    margin: 10px auto;
     h2 {
       padding-bottom: 10px;
     }
  }
</style>
