<template>
  <div>
    <div class="timeline-item">
      <svg className="line" width="20" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <rect x="9" y="0" width="2" height="100%" />
        <ellipse cx="10" cy="10" rx="10" ry="10" />
      </svg>
      <p><slot/></p>
    </div>
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

<style>
.timeline-item {
  display: flex;
  flex-direction: row;
  position: relative;
}

.timeline-item svg {
  position: absolute;
  height: 100%;
}

.timeline-item p {
  margin-left: 30px;
  line-height: 24px;
}
</style>
