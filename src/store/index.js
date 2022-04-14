import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import FindMusicStore from "./FindMusicStore";
import SearchMusic from "./SearchMusic";
export default new Vuex.Store({
  modules: {
    FindMusicStore,
    SearchMusic,
  },
});
