<template>
  <div>
    <div class="list-item">
      <svg className="line" width="20" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <ellipse cx="10" cy="10" rx="10" ry="10" />
      </svg>
      <p>
        <slot/>
      </p>
    </div>
    <timeline-separator/>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import '../styles/variables';

.list-item {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 30px;

  svg {
    position: absolute;
    height: 100%;

    ellipse {
      fill: $accent-color;
    }
  }

  p {
    margin-left: 30px;
    line-height: 24px;
  }
}
</style>
