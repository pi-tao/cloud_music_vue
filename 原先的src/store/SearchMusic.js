import { reqGetMusicURL } from "@/api";
export default {
  namespaced: true,
  state: {
    // musicUrl: "",
    musicInfo: {}, //音乐的url等信息
  },
  actions: {
    async SearchMusic({ commit }, data) {
      let result = await reqGetMusicURL(data);
      if (result.code == 200) {
        commit("SEARCHMUSIC", result.data);
        // console.log(result);
      }
    },
  },
  mutations: {
    SEARCHMUSIC(state, [a]) {
      // console.log(a);
      state.musicInfo = a;
    },
  },
  getters: {
    // 当前正在播放的音乐的url，
    musicUrl(state) {
      return state.musicInfo.url;
    },
  },
};
