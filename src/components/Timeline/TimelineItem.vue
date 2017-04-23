<template>
  <div class="timeline-item">
    <svg className="line" width="20" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <rect x="9" y="0" width="2" height="100%"/>
      <ellipse cx="10" cy="10" rx="10" ry="10"/>
    </svg>
    <pre><slot/></pre>
  </div>
</template>

<script>
export default {
  props: [
  ],
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

.timeline-item pre {
  margin-left: 30px;
  line-height: 24px;
}
</style>
