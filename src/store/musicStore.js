import { reqGetBanner } from "@/api";
import { reqGetGedan } from "@/api";
import { reqGetGedanInfo } from "@/api";
import { reqMusicDetail } from "@/api";
import { reqGetMusicURL } from "@/api";
import { reqGetMusicId } from "@/api";
import { reqAllVideo } from "@/api";
import { reqVideoUrl } from "@/api";
import { reqVideoDetail } from "@/api";

export default {
  namespaced: true,
  state: {
    banners: [] || undefined, //1.banner图片
    playlists: {} || undefined, //2.歌单列表
    gedanInfo: {} || undefined, //3.歌单信息
    musicListInfo: [] || undefined, //4.音乐列表信息
    musicInfo: {} || undefined, //5.当前播放歌曲的信息
    total: null, //6.搜索歌曲的总数

    videoList: undefined, //视频列表
    videoUrl: undefined, //当前播放的视频的url
    videoDetail: {}, //视频详情
  },
  actions: {
    // 1.获取banner图片
    async getBanner({ commit }) {
      let result = await reqGetBanner();
      // console.log(result);
      if (result.code == 200) {
        commit("GETBANNER", result.banners);
      }
    },
    // 2.获取推荐歌单列表
    async gedan_list({ commit }, data = 5) {
      let result = await reqGetGedan(data);
      // console.log(result);
      if (result.code == 200) {
        commit("GEDAN_LIST", result);
      }
    },
    // 3.获取歌单具体信息
    async getGedanInfo(context, data) {
      let result = await reqGetGedanInfo(data);
      // console.log(result);
      if (result.code == 200) {
        // 1.存储歌单信息
        let playlistInfo = {
          coverImgUrl: result.playlist.coverImgUrl, //1.歌单封面
          createTime: result.playlist.createTime, //2.歌单创建时间
          description: result.playlist.description, //3.歌单描述
          name: result.playlist.name, //4.歌单名
          playCount: result.playlist.playCount, //5.歌单点击量
          shareCount: result.playlist.shareCount, //6.分享数
          subscribedCount: result.playlist.subscribedCount, //7.订阅量
          authorImg: result.playlist.creator.avatarUrl, //8.作者头像
          authorbackgroundUrl: result.playlist.creator.backgroundUrl, //9作者北京图片
          authornickname: result.playlist.creator.nickname, //10.作者名
          authorsignature: result.playlist.creator.signature, //11.作者个性签名
          authoruserId: result.playlist.creator.userId, //12.作者id
          total: result.playlist.trackIds.length,
        };
        context.commit("GEDAN_INFO", playlistInfo);
        let trackIds = result.playlist.trackIds;
        // console.log(trackIds);
        let arr = [];
        trackIds.forEach((item) => {
          arr.unshift(item.id);
        });
        // console.log(arr.toString());
        context.dispatch("getlistInfo", arr.toString());
      }
    },
    // 4.获取歌单内所有歌曲信息
    async getlistInfo({ commit }, data) {
      let result = await reqMusicDetail(data);
      // console.log(result);
      if (result.code == 200) {
        commit("MUSICLISTINFO", result.songs);
      }
    },
    // 5,获取音乐url并保存当前音乐信息
    async musicInfo({ commit }, data) {
      let result = await reqGetMusicURL(data.id);
      // console.log(result);
      if (result.code == 200) {
        let url = result.data[0].url;
        let musicInfo = {
          ...data,
          url,
        };
        // console.log(musicInfo);
        commit("MUSICINFO", musicInfo);
      }
    },
    // 6.获取音乐id
    async musicName({ commit }, data) {
      let result = await reqGetMusicId(data);
      // console.log(result);
      if (result.code == 200) {
        commit("MUSICLISTINFO", result.result.songs);
        commit("MUSIC_TOTAL", result.result.songCount);
      }
    },
    // 7.搜索页获取音乐详情
    async musicDetail(context, data) {
      // console.log(data);
      let result = await reqMusicDetail(data.id);
      if (result.code == 200) {
        // console.log(result.songs);
        let info = {
          ...data,
          img: result.songs[0].al.picUrl,
        };
        context.dispatch("musicInfo", info);
      }
    },
    // 8.获取video信息
    async videoList({ commit }, data) {
      let times = data || 1;
      let arr = [];
      let i = 0;
      for (; i < 3 * times; i++) {
        let result = await reqAllVideo(i * 1);
        if (result.code == 200) {
          // console.log(result);
          arr.push(...result.datas);
        }
      }
      // console.log(arr);
      commit("VIDOELIST", arr);
    },
    // 9.获取videoUrl
    async videoUrl({ commit }, data) {
      let result = await reqVideoUrl(data);
      if (result.code == 200) {
        // console.log(result);
        commit("VIDEOURL", result.urls[0].url);
      }
    },
    // 10获取当前视频详细信息
    async videoDetail({ commit }, data) {
      let result = await reqVideoDetail(data);
      if (result.code == 200) {
        // console.log(result);
        commit("VIDEODETAIL", result.data);
      }
    },
  },
  mutations: {
    // 1.存储banner图片
    GETBANNER(state, data) {
      state.banners = data;
    },
    // 2.存储歌单列表
    GEDAN_LIST(state, data) {
      state.playlists = data;
    },
    // 3.存储歌单信息
    GEDAN_INFO(state, data) {
      state.gedanInfo = data;
    },
    // 4.存储歌曲列表信息
    MUSICLISTINFO(state, data) {
      state.musicListInfo = data;
    },
    // 5.存储当前播放歌曲信息
    MUSICINFO(state, data) {
      state.musicInfo = data;
    },
    // 6.存储搜索歌曲的总量
    MUSIC_TOTAL(state, data) {
      state.total = data;
    },
    // 7.存储视频列表
    VIDOELIST(state, data) {
      state.videoList = data;
    },
    // 8.存储视频url
    VIDEOURL(state, data) {
      state.videoUrl = data;
    },
    // 9.存储视频详情
    VIDEODETAIL(state, data) {
      state.videoDetail = data;
    },
  },
  getters: {
    // 1.获取歌单列表
    playlist(s) {
      return s.playlists.playlists || undefined;
    },
    // 2.获取歌单总数
    gedantotal(s) {
      return s.playlists.total || undefined;
    },
    // 3.获取当前video作者头像
    videoAva(s) {
      return s.videoDetail.avatarUrl || undefined;
    },
    // 4.获取当前video封面url
    videoCover(s) {
      return s.videoDetail.coverUrl || undefined;
    },
    // 5.获取当前video作者名称
    videoAvaName(s) {
      return s.videoDetail.creator.nickname || undefined;
    },
    // 6.获取当前video作者id
    videoUserId(s) {
      return s.videoDetail.creator.userId || undefined;
    },
    // 6.获取当前video描述
    videoDescription(s) {
      return s.videoDetail.description || undefined;
    },
    // 6.获取当前video标题
    videoTitle(s) {
      return s.videoDetail.title || undefined;
    },
    // 7.获取当前video的id
    videoId(s) {
      return s.videoDetail.vid || undefined;
    },
    // 8.获取当前video评论熟练
    videoCommentCount(s) {
      return s.videoDetail.commentCount || undefined;
    },
    // 9.获取当前video播放量
    videoPlayTime(s) {
      return s.videoDetail.playTime || undefined;
    },
  },
};
