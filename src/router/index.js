import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
// 解决编程路由导航反复点击报错问题
const includPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return includPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
  return includPush.call(this, location).catch((err) => err);
};

// 注册路由
const router = new VueRouter({
  routes: [
    {
      path: "*",
      redirect: "/find",
    },
    {
      name: "find",
      path: "/find",
      component: () => import("@/pages/find"),
      redirect: "/persion_recommend",
      children: [
        {
          name: "persion_recommend",
          path: "/persion_recommend",
          component: () => import("@/pages/find/persion_recommend"),
        },
        {
          name: "gedan_list",
          path: "gedan_list",
          component: () => import("@/pages/find/gedan_list"),
        },
        {
          name: "rank",
          path: "rank",
          component: () => import("@/pages/find/rank_list"),
        },
        {
          name: "singer",
          path: "singer",
          component: () => import("@/pages/find/singer"),
        },
        {
          name: "new_music",
          path: "new_music",
          component: () => import("@/pages/find/new_music"),
        },
        {
          name: "list_info",
          path: "list_info",
          component: () => import("@/pages/find/list_info"),
        },
      ],
    },
    {
      name: "musicVideo",
      path: "/musicVideo",
      component: () => import("@/pages/musicVideo"),
    },
    {
      name: "FM",
      path: "/FM",
      component: () => import("@/pages/FM"),
    },
    {
      name: "search",
      path: "/search",
      component: () => import("@/pages/search"),
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/pages/login"),
    },
    {
      name: "musicDetail",
      path: "/musicDetail",
      component: () => import("@/pages/musicVideo/musicDetail"),
    },
  ],
});
// 暴露router
export default router;
