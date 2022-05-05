import requests from "./requset";

// 1.账号密码登录接口
export const reqLogin = ({ phone, password }) =>
  requests({
    url: "/login/cellphone",
    methods: "get",
    params: {
      phone,
      password,
    },
  });
//2.获取二维码的key
export const reqGetCode = () =>
  requests({
    url: "/login/qr/key",
    methods: "get",
    params: {
      temp: Math.random(),
    },
  });
// 3.获取二维码接口
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
// 4.检测二维码扫描状态
export const reqGetCodeState = (params) =>
  requests({
    url: "/login/qr/check",
    methods: "get",
    params: {
      key: params,
      temp: Math.random(),
    },
  });
// 5.发送验证码登录
export const reqCtCode = (params) =>
  requests({
    url: "/captcha/sent",
    params: {
      phone: params,
    },
  });
// 6.验证验证码
export const reqVerify = (params) =>
  requests({
    url: "/captcha/verify",
    params: {
      phone: params,
    },
  });
// 7.获取用户详情接口
export const reqGetUserDetail = (params) =>
  requests({
    url: "/user/detail",
    methods: "get",
    params: {
      uid: params,
    },
  });
// 8.获取账号信息
export const reqUserAccount = (params) =>
  requests({
    url: "user/account",
    params: {
      cookie: params,
    },
  });
// 10.获取用户信息（dj数量等，未使用）
export const reqUserSubcount = () =>
  requests({
    url: "/user/subcount",
    params: {
      cookie: localStorage.getItem("music_cookie") || undefined,
    },
  });
// 11.获取用户等级信息
export const reqUserLevel = () => {
  requests({
    url: "/user/level",
    params: {},
  });
};
// 12.获取用户绑定信息
export const reqUserBinding = (params) => {
  requests({
    url: "/user/level",
    params: {
      uid: params,
    },
  });
};
// 13.更改用户绑定信息
export const reqUserUpdate = ({
  gender,
  birthday,
  nickname,
  province,
  city,
  signature,
}) => {
  requests({
    url: "/user/update",
    params: {
      gender,
      birthday,
      nickname,
      province,
      city,
      signature,
    },
  });
};
// 14.更改用户头像
// export const reqUserAvatar = (params) => {
//   requests({
//     url: "/avatar/upload",
//     params: {

//     },
//   });
// };
// 15.获取用户歌单
export const resGetUserPlayList = (params) =>
  requests({
    url: "/user/playlist",
    params: {
      uid: params,
    },
  });
// 16.获取用户电台
export const reqUserDj = (params) =>
  requests({
    url: "/user/dj",
    params: {
      uid: params,
    },
  });
// 17.获取用户关注列表
export const reqUserFollows = (params) =>
  requests({
    url: "/user/follows",
    params: {
      uid: params,
    },
  });
// 15.获取用户关注列表
export const reqUserFolloweds = (params) =>
  requests({
    url: "/user/followeds",
    params: {
      uid: params,
    },
  });
// 15.获取用户粉丝列表
export const reqUserEvent = (params) =>
  requests({
    url: "/user/event",
    params: {
      uid: params,
    },
  });
// 16.获取音乐id接口
export const reqGetMusicId = ({ name, offset = 0 }) =>
  requests({
    url: "/search",
    method: "get",
    params: {
      keywords: name,
      offset: offset,
    },
  });
// 17.获取音乐url
export const reqGetMusicURL = (params) =>
  requests({
    url: "/song/url",
    methods: "get",
    params: {
      id: params,
    },
  });
// 18.获取歌词接口
export const reqGetMusicWords = (params) =>
  requests({
    url: "/lyric",
    methods: "get",
    params: {
      id: params,
    },
  });

// 19.获取banner数据
export const reqGetBanner = () =>
  requests({
    url: "/banner",
    patams: {
      type: 2,
    },
  });
// 20.获取热门歌单
export const reqGetGedan = (params = 1) =>
  requests({
    url: "/top/playlist",
    params: {
      order: "hot",
      offset: 50 * params,
    },
  });
// 21.获取歌单详细信息
export const reqGetGedanInfo = (params) =>
  requests({
    url: "/playlist/detail",
    params: {
      id: params,
    },
  });

// 22.获取播放歌曲详情
export const reqMusicDetail = (params) =>
  requests({
    url: "/song/detail",
    params: {
      ids: params,
    },
  });
// 23.获取歌单所有的歌曲
export const reqPlayListAll = (params) =>
  requests({
    url: "/playlist/track/all",
    params: {
      id: params,
    },
  });
// 24.获取歌单分类
export const reqPlaylistCatlist = () =>
  requests({
    url: "/playlist/catlist",
  });
// 25.根据关键词获取歌单列表
export const reqTopplaylist = () =>
  requests({
    url: "/top/playlist",
  });
// 26.获取排行榜榜单
export const reqTopList = () =>
  requests({
    url: "/toplist",
  });
// 27.获取全部视频列表
export const reqAllVideo = (params) =>
  requests({
    url: "/video/timeline/all",
    params: {
      cookie: localStorage.getItem("music_cookie"),
      offset: params,
    },
  });
export const reqVideoUrl = (params) =>
  requests({
    url: "/video/url",
    params: {
      id: params,
    },
  });
export const reqVideoDetail = (params) =>
  requests({
    url: "video/detail",
    params: {
      id: params,
    },
  });
