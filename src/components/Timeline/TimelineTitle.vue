<template>
  <div class="timeline-title">
    <svg width="20" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <rect x="9" y="0" width="2" height="100%" />
    </svg>
    <h2><slot/></h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../../styles/variables';

.timeline-title {
  display: flex;
  flex-direction: row;
  position: relative;
}

.timeline-title svg {
  position: absolute;
  height: 100%;
}

.timeline-title h2 {
  margin-left: 30px;
  height: 24px;
  line-height: 24px;
  color: $accent-color;
}
</style>
