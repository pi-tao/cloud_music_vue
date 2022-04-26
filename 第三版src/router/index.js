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
import findMusicPage from "@/pages/findMusicPage";
import searchMusicPage from "@/pages/searchMusicPage";
import gedanList from "@/pages/gedanList";
import loginPage from "@/pages/loginPage";
import codeLogin from "@/pages/codeLogin";
import findMusicRecommend from "@/pages/findMusicRecommend";
import allPlayList from "@/pages/allPlayList";
// 注册路由
const router = new VueRouter({
  routes: [
    {
      path: "*",
      redirect: "/findMusicPage",
    },
    {
      name: "findMusicPage",
      path: "/findMusicPage",
      component: findMusicPage,
      redirect: "/findMusicRecommend",
      children: [
        {
          name: "findMusicRecommend",
          path: "/findMusicRecommend",
          component: findMusicRecommend,
        },
        {
          name: "allPlayList",
          path: "/allPlayList",
          component: allPlayList,
        },
      ],
    },
    {
      name: "searchMusicPage",
      path: "/searchMusicPage",
      component: searchMusicPage,
    },
    {
      name: "gedanList",
      path: "/gedanList",
      component: gedanList,
    },
    {
      name: "loginPage",
      path: "/loginPage",
      component: loginPage,
    },
    {
      name: "codeLogin",
      path: "/codeLogin",
      component: codeLogin,
    },
  ],
});
// 暴露router
export default router;
