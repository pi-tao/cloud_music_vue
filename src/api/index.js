import requests from "./requset";
// 获取音乐id接口
export const reqGetMusicId = (params) =>
  requests({
    url: "/search",
    method: "get",
    params: {
      keywords: params,
    },
  });
// 获取音乐url
export const reqGetMusicURL = (params) =>
  requests({
    url: "/song/url",
    methods: "get",
    params: {
      id: params,
    },
  });
// 获取歌词接口
export const reqGetMusicWords = (params) =>
  requests({
    url: "/lyric",
    methods: "get",
    params: {
      id: params,
    },
  });
// 账号密码登录接口
export const reqLogin = (params) =>
  requests({
    url: "/login/cellphone",
    methods: "get",
    params: {
      phone: params[0],
      password: params[1],
    },
  });
// 1.获取二维码的key
export const reqGetCode = () =>
  requests({
    url: "/login/qr/key",
    methods: "get",
    params: {
      temp: Math.random(),
    },
  });
// 2.获取二维码接口
export const reqGetCodeUrl = (params) =>
  requests({
    url: "/login/qr/create",
    methods: "get",
    params: {
      key: params,
      qrimg: "170y170",
      temp: Math.random(),
    },
  });
// 3.检测二维码扫描状态
export const reqGetCodeState = (params) =>
  requests({
    url: "/login/qr/check",
    methods: "get",
    params: {
      key: params,
      temp: Math.random(),
    },
  });
// 获取用户详情接口
export const reqGetUserInfo = (params) =>
  requests({
    url: "/user/detail",
    methods: "get",
    params: {
      cookie: params,
    },
  });
// 获取banner数据
export const reqGetBanner = () =>
  requests({
    url: "/banner",
    patams: {
      type: 2,
    },
  });
// 获取热门歌单
export const reqGetGedan = () =>
  requests({
    url: "/top/playlist",
    params: {
      order: "hot",
      limit: 50,
    },
  });
// 获取歌单详细信息
export const reqGetGedanInfo = (params) =>
  requests({
    url: "/playlist/detail",
    params: {
      id: params,
    },
  });
