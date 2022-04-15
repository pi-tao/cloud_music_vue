import { reqGetMusicWords } from "@/api";
export default {
  namespaced: true,
  state: {
    musicWords: [],
  },
  actions: {
    async getMusicWords({ commit }, data) {
      let result = await reqGetMusicWords(data);
      let words = result.lrc.lyric.split(/\s*\n*\[.*?\]\s*/).filter((v) => !!v);
      commit("GETMUSICWORDS", words);
    },
  },
  mutations: {
    GETMUSICWORDS(state, data) {
      state.musicWords = data;
    },
  },
  getters: {},
};
