import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import FindMusicStore from "./FindMusicStore";
import SearchMusic from "./SearchMusic";
import MusicWordsStore from "./MusicWordsStore";
import UserStore from "./UserStore";
export default new Vuex.Store({
  modules: {
    FindMusicStore,
    SearchMusic,
    MusicWordsStore,
    UserStore,
  },
});
