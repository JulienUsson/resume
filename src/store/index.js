import Vue from 'vue';
import Vuex from 'vuex';
import resume from './modules/resume';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    resume,
  },
  strict: process.env.NODE_ENV !== 'production',
});
