<template>
  <div id="footer">
    <div>
      Made with VueJS, Vuex and <span class="hearth">❤</span> by Julien Usson<br/>
      <span class="small">Thanks to <a href="http://www.heropatterns.com/">Hero Patterns</a> for this gorgeous hero background</span>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import '../styles/variables';

#footer {
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  font-weight: bold;
  text-align: center;
  background-color: $primary-color;

  .hearth {
    color: red;
  }

  .small {
    font-size: 0.7em;
  }
}
</style>
