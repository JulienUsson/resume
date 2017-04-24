<template>
  <span class="chips">#<slot/></span>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import '../styles/variables';

.chips {
  background-color: $accent-color;
  padding: 2px;
  margin: 0 3px;
}
</style>
