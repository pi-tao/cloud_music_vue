import { reqGetMusicId } from "@/api";
import { reqGetBanner } from "@/api";
import { reqGetGedan } from "@/api";
import { reqGetGedanInfo } from "@/api";
export default {
  namespaced: true,
  state: {
    musicList: [],
    bannerList: [],
    gedanInfo: [], //歌单信息
    gedanListInfo: {},
  },
  actions: {
    // 获取音乐id
    async getMusicId({ commit }, data) {
      let result = await reqGetMusicId(data);
      if (result.code == 200) {
        commit("GETMUSICID", result.result.songs);
      }
    },
    // 获取banner信息
    async getBanner({ commit }) {
      let result = await reqGetBanner();
      // console.log(result);
      commit("GETBANNER", result.banners);
    },
    // 获取歌单列表
    async getGedan({ commit }) {
      let result = await reqGetGedan();
      // console.log(result);
      if (result.code == 200) {
        commit("GETGEDAN", result.playlists);
      }
    },
    // 获取歌单详细信息
    async getGedanInfo({ commit }, data) {
      let result = await reqGetGedanInfo(data);
      console.log(result);
      if (result.code == 200) {
        commit("GETGEDANINFO", result.playlist);
      }
    },
  },
  mutations: {
    GETMUSICID(state, data) {
      state.musicList = data;
    },
    // 获取banner
    GETBANNER(state, data) {
      state.bannerList = data;
    },
    // 获取推荐歌单信息
    GETGEDAN(state, data) {
      state.gedanInfo = data;
    },
    // 获取歌单信息
    GETGEDANINFO(state, data) {
      state.gedanListInfo = data;
    },
  },
  getters: {},
};
