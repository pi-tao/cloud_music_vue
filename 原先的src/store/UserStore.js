import { reqLogin } from "@/api";
import { reqGetCode } from "@/api";
import { reqGetCodeUrl } from "@/api";
import { reqGetCodeState } from "@/api";
import { reqUserDetail } from "@/api";
import { reqUserAccount } from "@/api";
import { reqUserSubcount } from "@/api";
import { resGetUserPlayList } from "@/api";
export default {
  namespaced: true,
  state: {
    cookie: "",
    headUrl: "",
    username: "",
    userId: "",
    token: "",
    codeUrl: "", //二维码链接
    codeState: null,
    userDetail: {}, //用户详细信息
    userPlayList: [], //用户收藏歌单
  },
  actions: {
    //   1.手机号登录
    async toLogin({ commit }, data) {
      let result = await reqLogin(data);
      // console.log(result);
      if (result.code == 200) {
        let info = {
          cookie: result.cookie,
          headUrl: result.profile.avatarUrl,
          username: result.profile.nickname,
          userId: result.profile.userId,
          token: result.token,
        };
        localStorage.setItem("userInfo", JSON.stringify(info));
        commit("TOLOGIN", info);
        confirm("成功登录");
      }
    },
    // 2.二维码登录
    async getCodeKey(context) {
      let result = await reqGetCode();
      if (result.code == 200) {
        let unikey = result.data.unikey;
        context.dispatch("getCodeUrl", unikey);
      }
    },
    // 3.获取二维码链接
    async getCodeUrl(context, data) {
      let result = await reqGetCodeUrl(data);
      let time = setInterval(() => {
        context.dispatch("getCodeUrlState", data);
        if (context.state.codeState == 803) {
          clearInterval(time);
        } else if (context.state.codeState == 800) {
          clearInterval(time);
        }
      }, 5000); //每隔三秒钟查看一下二维码情况
      if (result.code == 200) {
        let codeUrl = result.data.qrimg;
        context.commit("GETCODEURL", codeUrl);
      }
    },
    // 4.查看二维码扫描状态
    async getCodeUrlState(context, data) {
      let result = await reqGetCodeState(data);
      // console.log(result);
      if (result.code == 803) {
        console.log("登录成功");
        let codeDta = {
          cookie: result.cookie,
          code: 803,
        };
        context.commit("GETCODEURLSTATE", codeDta);
      } else if (result.code == 800) {
        context.commit("CHANGECODESTATE", 800);
      }
    },
    // 5.获取用户详情
    async getUserDetail(context) {
      if (context.state.userId) {
        let result = await reqUserDetail(context.state.userId);
        // console.log(result);
        context.commit("GETUSERDETAIL", result);
      }
    },
    // 6.获取账号信息
    async getUserAccount(context) {
      if (context.state.userId) {
        let result = await reqUserAccount(context.state.userId);
        // console.log(result);
        // context.commit("GETUSERDETAIL", result);
      }
    },
    // 7.获取用户信息（歌单、收藏、mv、dj数量）
    async getUserSubcount(context) {
      if (context.state.userId) {
        let result = await reqUserSubcount(context.state.userId);
        // console.log(result);
        // context.commit("GETUSERSUBCOUNT", result);
      }
    },
    // 15.获取用户歌单
    async getUserPlayList(context) {
      if (context.state.userId) {
        let result = await resGetUserPlayList(context.state.userId);
        // console.log(result);
        context.commit("GETUSERPLAYLIST", result.playlist);
      }
    },
  },
  mutations: {
    //   1.手机号登录
    TOLOGIN(state, { cookie, headUrl, username, userId, token }) {
      state.cookie = cookie;
      state.username = username;
      state.userId = userId;
      state.headUrl = headUrl;
      state.token = token;
    },
    //   2.二维码登录
    GETCODEURL(state, data) {
      state.codeUrl = data;
    },
    // 3.获取二维码扫描状态，
    GETCODEURLSTATE(state, { code, cookie }) {
      state.codeState = code;
      state.cookie = cookie;
      window.localStorage.cookie = cookie;
    },
    //4.二维码状态
    CHANGECODESTATE(state, data) {
      state.codeState = data;
    },
    // 5.用户详细信息
    GETUSERDETAIL(state, data) {
      state.userDetail = data;
    },
    // 7.获取用户信息（歌单、收藏、mv、dj数量）
    // GETUSERSUBCOUNT(state, data) {
    //   state.
    // }
    // 15.获取用户歌单
    GETUSERPLAYLIST(state, data) {
      state.userPlayList = data;
    },
  },
  getters: {},
};
