import requests from "./requset";
// 1.获取音乐id接口
export const reqGetMusicId = ([name, offset = 0]) =>
  requests({
    url: "/search",
    method: "get",
    params: {
      keywords: name,
      offset: offset,
    },
  });
// 2.获取音乐url
export const reqGetMusicURL = (params) =>
  requests({
    url: "/song/url",
    methods: "get",
    params: {
      id: params,
    },
  });
// 3.获取歌词接口
export const reqGetMusicWords = (params) =>
  requests({
    url: "/lyric",
    methods: "get",
    params: {
      id: params,
    },
  });
// 4.账号密码登录接口
export const reqLogin = ({ phone, password }) =>
  requests({
    url: "/login/cellphone",
    methods: "get",
    params: {
      phone,
      password,
    },
  });
// 5.获取二维码的key
export const reqGetCode = () =>
  requests({
    url: "/login/qr/key",
    methods: "get",
    params: {
      temp: Math.random(),
    },
  });
// 6.获取二维码接口
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
// 7.检测二维码扫描状态
export const reqGetCodeState = (params) =>
  requests({
    url: "/login/qr/check",
    methods: "get",
    params: {
      key: params,
      temp: Math.random(),
    },
  });
// 8.获取用户详情接口
export const reqGetUserInfo = (params) =>
  requests({
    url: "/user/detail",
    methods: "get",
    params: {
      cookie: params,
    },
  });
// 9.获取banner数据
export const reqGetBanner = () =>
  requests({
    url: "/banner",
    patams: {
      type: 2,
    },
  });
// 10.获取热门歌单
export const reqGetGedan = () =>
  requests({
    url: "/top/playlist",
    params: {
      order: "hot",
      limit: 50,
    },
  });
// 11.获取歌单详细信息
export const reqGetGedanInfo = (params) =>
  requests({
    url: "/playlist/detail",
    params: {
      id: params,
    },
  });
// 12获取用户信息
export const reqUserDetail = (params) =>
  requests({
    url: "user/detail",
    params: {
      uid: params,
    },
  });
// 13.获取账号信息
export const reqUserAccount = (params) =>
  requests({
    url: "user/account",
    params: {
      uid: params,
    },
  });
// 14.获取用户信息（dj数量等，未使用）
export const reqUserSubcount = (params) =>
  requests({
    url: "/user/subcount",
    params: {
      uid: params,
    },
  });
// 15.获取用户歌单
export const resGetUserPlayList = (params) =>
  requests({
    url: "/user/playlist",
    params: {
      uid: params,
    },
  });
// 16.获取播放歌曲详情
export const reqMusicDetail = (params) =>
  requests({
    url: "/song/detail",
    params: {
      ids: params,
    },
  });
// 17.获取歌单所有的歌曲
export const reqPlayListAll = (params) =>
  requests({
    url: "/playlist/track/all",
    params: {
      id: params,
    },
  });
