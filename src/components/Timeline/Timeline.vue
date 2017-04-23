<template>
  <div class="timeline">
    <timeline-separator/>
    <slot/>
    <timeline-separator/>
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

.timeline {
  padding-left: 15px;
}

.timeline rect {
  fill: $timeline-color;
}

.timeline ellipse {
  fill: $primary-color;
}
</style>
