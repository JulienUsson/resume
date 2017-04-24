<template>
  <div class="chips">#<slot/></div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import '../styles/variables';

.chips {
  display: inline-block;
  background-color: $accent-color;
  padding: 2px;
  margin: 1px 2px;
  font-size: 0.9em;
  font-weight: bold;
}
</style>
