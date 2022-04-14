import { reqGetMusicURL } from "@/api";
export default {
  namespaced: true,
  state: {
    musicUrl: "",
  },
  actions: {
    async SearchMusic({ commit }, data) {
      let result = await reqGetMusicURL(data);
      if (result.code == 200) {
        commit("SEARCHMUSIC", result.data);
      }
    },
  },
  mutations: {
    SEARCHMUSIC(state, [a]) {
      state.musicUrl = a.url;
    },
  },
  getters: {},
};
