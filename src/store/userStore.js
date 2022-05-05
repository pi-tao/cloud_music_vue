import { reqLogin } from "@/api";
import { reqUserAccount } from "@/api";
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
  },
  actions: {
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
    async userInfo({ commit }, data) {
      let result = await reqUserAccount(data);
      if (result.code == 200) {
        // console.log(result);
        commit("USERINFO", result);
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
  },
  getters: {},
};
