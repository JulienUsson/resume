<template>
  <div class="timeline">
    <timeline-separator/>
    <slot/>
  </div>
</template>

<script>
import TimelineSeparator from './TimelineSeparator';

export default {
  components: {
    TimelineSeparator,
  },
};
</script>

<style lang="scss">
@import '../../styles/variables';

.timeline rect {
  fill: $timeline-color;
}

.timeline ellipse {
  fill: $accent-color;
}
</style>
