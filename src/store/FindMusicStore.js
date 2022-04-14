import { reqGetMusicId } from "@/api";
export default {
  namespaced: true,
  state: {
    musicList: [],
  },
  actions: {
    async getMusicId({ commit }, data) {
      let result = await reqGetMusicId(data);
      if (result.code == 200) {
        commit("GETMUSICID", result.result.songs);
      }
    },
  },
  mutations: {
    GETMUSICID(state, data) {
      state.musicList = data;
    },
  },
  getters: {},
};
