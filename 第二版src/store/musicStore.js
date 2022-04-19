import { reqGetMusicId } from "@/api";
import { reqGetMusicURL } from "@/api";
import { reqMusicDetail } from "@/api";
import { reqPlayListAll } from "@/api";
export default {
  namespaced: true,
  state: {
    searchText: "",
    musicListInfo: {}, //搜索的音乐的所有信息
    musicInfo: {}, //当前播放的音乐的信息
    gedanList: [],
  },
  actions: {
    // 1.获取音乐列表
    async sendMusicName({ commit }, data) {
      let result = await reqGetMusicId(data);
      commit("SEARCHTEXT", data[0]);
      // console.log(result);
      if (result.code == 200) {
        commit("SENDMUSICNAME", result.result);
      }
    },
    // 2.接收音乐信息并获取url
    async getMusic(context, data) {
      let result = await reqGetMusicURL(data.musicid);
      // console.log(result);
      // 获取当前播放音乐的img
      let musicImg = (await reqMusicDetail(data.musicid)).songs[0].al.picUrl;
      // console.log(musicImg);
      let musicUrl = result.data[0].url;
      let musicInfo = {
        ...data,
        musicUrl,
        musicImg,
      };
      // console.log(musicInfo);
      context.commit("GETMUSIC", musicInfo);
    },
  },
  mutations: {
    // 1.存储音乐列表
    SENDMUSICNAME(state, data) {
      state.musicListInfo = data;
    },
    // 2.存储当前播放的额音乐信息
    GETMUSIC(state, data) {
      state.musicInfo = data;
    },
    // 3.存储搜索的关键词
    SEARCHTEXT(state, data) {
      state.searchText = data;
    },
    // 4.存储歌单列表
    GEDANLIST(state, data) {
      state.gedanList = data;
    },
  },
  getters: {
    // 1.音乐总数
    songCount(state) {
      return state.musicListInfo.songCount || undefined;
    },
    // 2.音乐列表
    songs(state) {
      return state.musicListInfo.songs || undefined;
    },
    // 3.音乐url
    musicUrl(state) {
      return state.musicInfo.musicUrl || undefined;
    },
    // 4.当前播放的歌曲是第几首
    musicIndex(state) {
      return state.musicInfo.index || undefined;
    },
    // 5.当前播放的音乐名
    musicName(state) {
      return state.musicInfo.musicname || undefined;
    },
    // 6.作者
    musicAuthor(state) {
      return state.musicInfo.musicauthor || undefined;
    },
    // 音乐img
    musicImg(state) {
      return state.musicInfo.musicImg || undefined;
    },
  },
};
