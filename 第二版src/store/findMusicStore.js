import { reqGetBanner } from "@/api";
import { reqGetGedan } from "@/api";
import { reqGetGedanInfo } from "@/api";
export default {
  namespaced: true,
  state: {
    banners: [], //轮播图
    gedanInfo: {}, //推荐歌单列表
    thisGedanInfo: {}, //当前歌单信息
    thisMusicInfo: {},
  },
  actions: {
    //   1.获取banner
    async getBanner({ commit }) {
      let result = await reqGetBanner();
      //   console.log(result);
      if (result.code == 200) {
        commit("GETBANNER", result.banners);
      }
    },
    // 2.获取歌单列表
    async getGedan({ commit }) {
      let result = await reqGetGedan();
      //   console.log(result);
      if (result.code == 200) {
        commit("GETGEDAN", result);
      }
    },
    // 3.获取歌单列表
    async gedanInfo(context, data) {
      let result = await reqGetGedanInfo(data);
      // console.log(result);
      context.commit("GEDANINFO", result);
    },
  },
  mutations: {
    //   1.存储banner
    GETBANNER(state, data) {
      state.banners = data;
    },
    //   2.存储歌单信息
    GETGEDAN(state, data) {
      state.gedanInfo = data;
    },
    // 3.存储当前歌单信息
    GEDANINFO(state, data) {
      state.thisGedanInfo = data.playlist;
    },
    // 4.存储当前播放歌曲的信息
    MUSICINFO(state, data) {
      state.thisMUsicInfo = data;
    },
  },
  getters: {
    //1.歌单列表
    gedanLists(state) {
      return state.gedanInfo.playlists || undefined;
    },
    // 2.歌单总数
    gedanTotal(state) {
      return state.gedanInfo.total | undefined;
    },
    // 3.当前歌单的img
    gedanImg(state) {
      return state.thisGedanInfo.coverImgUrl || undefined;
    },
    // 4.当前歌单描述
    gedanDescrption(state) {
      return state.thisGedanInfo.description || undefined;
    },
    // 5.当前歌单名字
    gedanName(state) {
      return state.thisGedanInfo.name || undefined;
    },
    // 6.当前歌单作者头像
    gedanAuthorImg(state) {
      return state.thisGedanInfo.creator.avatarUrl || undefined;
    },
    // 7.当前歌单作者名称
    gedanAuthorName(state) {
      return state.thisGedanInfo.creator.nickname || undefined;
    },
    // 8.当前歌单作者签名
    gedanAuthorSignature(state) {
      return state.thisGedanInfo.creator.signature || undefined;
    },
    // 9.当前歌单点击量
    gedanPlayCount(state) {
      return state.thisGedanInfo.playCount || undefined;
    },
    // 10.当前歌单分享数
    gedanShareCount(state) {
      return state.thisGedanInfo.shareCount || undefined;
    },
    // 11.当前歌单标签
    gedanTags(state) {
      return state.thisGedanInfo.tags || undefined;
    },
    // 11.当前歌单歌曲列表
    gedanMusicList(state) {
      return state.thisGedanInfo.tracks || undefined;
    },
  },
};
