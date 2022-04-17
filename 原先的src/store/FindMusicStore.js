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
    gedanMusicName: "", //当前音乐名，
    gedanauthor: "", //歌单中当前作者
    musicindex: null, //歌单中的第几首
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
      // console.log(result);
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
    // 获取歌单信息以及歌曲列表
    GETGEDANINFO(state, data) {
      state.gedanListInfo = data;
      state.musicList = data.tracks;
    },
    // 存储当前音乐名和歌单作者
    MUSICNAME(state, { musicname, author, index }) {
      state.gedanMusicName = musicname;
      state.gedanauthor = author;
      state.musicindex = index;
    },
  },
  getters: {
    // 歌单名称
    gedanName({ gedanListInfo }) {
      return gedanListInfo.name || undefined;
    },
    // 歌单img
    gedanImg({ gedanListInfo }) {
      return gedanListInfo.coverImgUrl || undefined;
    },
    // 歌单简介
    gedanJianjie({ gedanListInfo }) {
      return gedanListInfo.description || undefined;
    },
    // 歌单创建者
    gedanCreatorName({ gedanListInfo }) {
      if (gedanListInfo.creator) {
        return gedanListInfo.creator.nickname || undefined;
      }
    },
    // 歌单作者头像
    gedanCreatorImg({ gedanListInfo }) {
      if (gedanListInfo.creator) {
        return gedanListInfo.creator.backgroundUrl || undefined;
      }
    },
    // 歌单标签
    gedanBiaoQian({ gedanListInfo }) {
      return gedanListInfo.tags || undefined;
    },
  },
};
