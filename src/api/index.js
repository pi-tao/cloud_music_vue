import requests from "./requset";

export const reqGetMusicId = (params) =>
  requests({
    url: "/search",
    method: "get",
    params: {
      keywords: params,
    },
  });

export const reqGetMusicURL = (params) =>
  requests({
    url: "/song/url",
    methods: "get",
    params: {
      id: params,
    },
  });
