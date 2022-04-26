import { reqGetMusicId } from "@/api";
import { reqGetMusicURL } from "@/api";
import { reqMusicDetail } from "@/api";
import { reqGetGedan } from "@/api";
import { reqGetGedanInfo } from "@/api";
import { reqGetBanner } from "@/api";
import { reqPlaylistCatlist } from "@/api";
export default {
  namespaced: true,
  state: {
    searchText: undefined, //搜索的内容
    songCount: null, //音乐数量
    gedanCount: null, //歌单数量
    gedanlistInfo: {}, //歌单详细信息
    musicList: [], //music列表
    gedanList: [], //最外层歌单信息
    musicInfo: {}, //当前播放音乐的信息
    musicImgUrl: undefined, //当前播放歌曲的img
    bannerList: [], //banner列表
    playlistCatList: {}, //全部歌单分类列表
  },
  actions: {
    // 1.发送音乐名获取音乐列表
    async musicList({ commit }, data) {
      let result = await reqGetMusicId(data);
      // console.log(result);
      if (result.code === 200) {
        commit("MUSICLIST", result.result);
      }
    },
    // 2.发送音乐信息
    async musicInfo(context, data) {
      let result = await reqGetMusicURL(data.id);
      // console.log(result);
      if (result.code == 200) {
        let url = result.data[0].url;
        let musicInfo = {
          ...data,
          url,
        };
        console.log(musicInfo);
        context.commit("MUSICINFO", musicInfo);
        context.dispatch("musicDetail", data.id);
      }
    },
    // 3.获取音乐url
    async musicDetail({ commit }, data) {
      let result = await reqMusicDetail(data);
      if (result.code == 200) {
        let musicImgUrl = result.songs[0].al.picUrl || undefined;
        commit("MUSICDETAIL", musicImgUrl);
        // console.log(musicImgUrl);
      }
    },
    // 4.获取歌单列表
    async gedanList({ commit }, data) {
      let result = await reqGetGedan(data);
      if (result.code == 200) {
        // console.log(result);
        commit("GEDANLIST", result);
      }
    },
    // 5.获取歌单详细信息
    async gedanInfo({ commit }, data) {
      let result = await reqGetGedanInfo(data);
      // console.log(result);
      if (result.code == 200) {
        let trackIds = result.playlist.trackIds;
        let playlistInfo = {
          coverImgUrl: result.playlist.coverImgUrl,
          createTime: result.playlist.createTime,
          description: result.playlist.description,
          name: result.playlist.name,
          playCount: result.playlist.playCount,
          shareCount: result.playlist.shareCount,
          subscribedCount: result.playlist.subscribedCount,
          authorImg: result.playlist.creator.avatarUrl,
          authorbackgroundUrl: result.playlist.creator.backgroundUrl,
          authornickname: result.playlist.creator.nickname,
          authorsignature: result.playlist.creator.signature,
          authoruserId: result.playlist.creator.userId,
        };
        commit("GEDANLISTINFO", playlistInfo);
        // console.log(trackIds);
        let arr = [];
        trackIds.forEach((item) => {
          arr.unshift(item.id);
        });
        // console.log(arr);
        let result1 = await reqMusicDetail(arr.toString());
        // console.log(result1);
        if (result1.code == 200) {
          let gedanlistInfo = {
            songCount: result1.songs.length,
            songs: result1.songs,
          };
          commit("MUSICLIST", gedanlistInfo);
        }
      }
    },
    // 6.banner图片
    async bannerList({ commit }) {
      let result = await reqGetBanner();
      // console.log(result);
      if (result.code == 200) {
        commit("BANNERLIST", result.banners);
      }
    },
    // 7.歌单分类
    async playlistCatlist({ commit }) {
      let result = await reqPlaylistCatlist();
      if (result.code == 200) {
        commit("PLAYLISTCATLIST", result);
      }
    },
  },
  mutations: {
    // 1.保存搜索的音乐列表
    MUSICLIST(state, { songCount, songs }) {
      state.musicList = songs;
      state.songCount = songCount;
    },
    // 2.保存搜索的名称
    MUSICNAME(state, data) {
      state.searchText = data;
    },
    // 3.保存当前播放的音乐的url以及信息
    MUSICINFO(state, data) {
      state.musicInfo = data;
    },
    // 4.保存当前播放的音乐的img
    MUSICDETAIL(state, data) {
      state.musicImgUrl = data;
    },
    // 5.保存歌单基本信息
    GEDANLIST(state, { total, playlists }) {
      state.gedanCount = total;
      state.gedanList = playlists;
    },
    // 6.当前歌单详细信息
    GEDANLISTINFO(state, data) {
      state.gedanlistInfo = data;
    },
    // 7.banner列表
    BANNERLIST(state, data) {
      state.bannerList = data;
    },
    // 8.存储歌单分类
    PLAYLISTCATLIST(state, data) {
      state.playlistCatList = data;
    },
  },
  getters: {
    // 1.当前播放的音乐序列
    musicIndex(s) {
      return s.musicInfo.index || undefined;
    },
    // 2.当前音乐url
    musicUrl(s) {
      return s.musicInfo.url || undefined;
    },
    // 3.当前音乐名
    musicName(s) {
      return s.musicInfo.name || undefined;
    },
    // 4.当前音乐作者
    musicAuthor(s) {
      return s.musicInfo.author || undefined;
    },
    // 5.当前音乐路由地址
    musicAddress(s) {
      return s.musicInfo.address || undefined;
    },
    // 6.歌单音乐分类
    gedanSub(s) {
      return s.playlistCatList.sub || undefined;
    },
  },
};
