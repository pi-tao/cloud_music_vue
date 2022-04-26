import { reqLogin } from "@/api";
import { reqGetCode } from "@/api";
import { reqGetCodeUrl } from "@/api";
import { reqGetCodeState } from "@/api";
export default {
  namespaced: true,
  state: {
    userInfo: {}, //1.账号的原始信息
    //二维码信息
    codeInfo: {
      unikey: "",
      qrImg: "",
      codeState: "",
      cookie: "",
    },
  },
  actions: {
    //   1.获取账号信息
    async getUserInfo({ commit }, data) {
      let result = await reqLogin(data);
      if (result.code == 200) {
        // console.log(result);
        commit("GETUSERINFO", result);
      }
    },
    //   2.获取二维码key
    async codeKey(context, data) {
      let result = await reqGetCode(data);
      //   console.log(result);
      context.commit("CODEKEY", result.data.unikey);
      context.dispatch("codeImg", result.data.unikey);
      let time = setInterval(() => {
        context.dispatch("codeState", result.data.unikey);
        if (context.state.codeInfo.codeState == "二维码不存在或已过期") {
          clearInterval(time);
        }
      }, 3000);
    },
    // 3.获取二维码img
    async codeImg(context, data) {
      let result = await reqGetCodeUrl(data);
      //   console.log(result);
      context.commit("CODEIMG", result.data.qrimg);
    },
    async codeState({ commit }, data) {
      let result = await reqGetCodeState(data);
      commit("CODESTATE", result.message);
      console.log(result);
      if (result.code == 803) {
        commit("CODECOOKIE", result.cookie);
      }
    },
  },
  mutations: {
    // 1.存储账号信息
    GETUSERINFO(state, data) {
      state.userInfo = data;
    },
    //2.存储二维码key
    CODEKEY(state, data) {
      state.codeInfo.unikey = data;
    },
    // 3.存储二维码图片
    CODEIMG(state, data) {
      state.codeInfo.qrImg = data;
    },
    // 4.存储二维码扫描状态
    CODESTATE(state, data) {
      state.codeInfo.codeState = data;
    },
    // 5.存储二维码生成的cookie
    CODECOOKIE(state, data) {
      state.codeInfo.codeCookie = data;
    },
  },
  getters: {
    // 1.获取cookie
    cookie(state) {
      localStorage.cookie = state.userInfo.cookie;
      return state.userInfo.cookie || undefined;
    },
    // 2.token
    token(state) {
      localStorage.token = state.userInfo.token;
      return state.userInfo.token || undefined;
    },
    // 3.账号头像
    userImg(state) {
      return state.userInfo.profile.avatarUrl || undefined;
    },
    // 4.用户id
    userId(state) {
      localStorage.id = state.userInfo.profile.userId;
      return state.userInfo.profile.userId || undefined;
    },
    // 5.用户名
    userName(state) {
      return state.userInfo.profile.nickname || undefined;
    },
    // 6.二维码src
    codeImg(state) {
      return state.codeInfo.qrImg || undefined;
    },
    codeState(state) {
      return state.codeInfo.codeState || undefined;
    },
  },
};
