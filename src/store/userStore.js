import { reqLogin } from "@/api";
import { reqUserAccount } from "@/api";
import { reqUserPlayList } from "@/api";
export default {
  namespaced: true,
  state: {
    userInfo: {
      isLogin: localStorage.getItem("music_cookie") ? true : false,
      cookie: localStorage.getItem("music_cookie") || undefined,
      token: undefined,
      name: undefined,
      userId: undefined,
      avatarUrl: undefined,
      backgroundUrl: undefined,
    },
    userPlayList: [],
  },
  actions: {
    // 1.登录
    async login({ commit }, data) {
      if (!localStorage.getItem("music_cookie")) {
        let result = await reqLogin(data);
        if (result.code == 200) {
          commit("LOGIN", result);
          // console.log(result);

          localStorage.setItem("music_cookie", result.cookie);
        }
      }
      // console.log(await reqAllVideo());
    },
    // 2.获取用户信息
    async userInfo({ commit, dispatch }, data) {
      let result = await reqUserAccount(data);
      if (result.code == 200) {
        // console.log(result);
        commit("USERINFO", result);
        dispatch("userPlay", result.profile.userId);
      }
    },
    //3. 获取用户歌单
    async userPlay({ commit }, data) {
      let result = await reqUserPlayList(data);
      if (result.code == 200) {
        // console.log(result);
        commit("USERPLAY", result.playlist);
      }
    },
  },
  mutations: {
    LOGIN({ userInfo }, data) {
      if (!localStorage.getItem("music_cookie")) {
        userInfo.cookie = data.cookie;
        userInfo.isLogin = true;
      }
      userInfo.token = data.token;
      userInfo.name = data.profile.nickname;
      userInfo.userId = data.profile.userId;
      userInfo.avatarUrl = data.profile.avatarUrl;
      userInfo.backgroundUrl = data.profile.backgroundUrl;
    },
    USERINFO({ userInfo }, data) {
      userInfo.name = data.profile.nickname;
      userInfo.userId = data.profile.userId;
      userInfo.avatarUrl = data.profile.avatarUrl;
      userInfo.backgroundUrl = data.profile.backgroundUrl;
    },
    // .存储用户歌单
    USERPLAY(state, data) {
      state.userPlayList = data;
    },
  },
  getters: {},
};
