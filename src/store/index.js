import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import musicStore from "./musicStore";
import findMusicStore from "./findMusicStore";
export default new Vuex.Store({
  modules: {
    musicStore,
    findMusicStore,
  },
});
