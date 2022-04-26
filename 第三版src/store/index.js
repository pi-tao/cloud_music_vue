import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import musicStore from "./musicStore";
export default new Vuex.Store({
  modules: {
    musicStore,
  },
});
