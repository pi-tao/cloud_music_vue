import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import musicStore from "./musicStore";
import userStore from "./userStore";
export default new Vuex.Store({
  modules: {
    musicStore,
    userStore,
  },
});
