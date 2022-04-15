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
import FindMusic from "@/pages/FindMusic";
import musicList from "@/pages/musicList";
import MusicWords from "@/pages/MusicWords";
import LoginPage from "@/pages/LoginPage";
import codeLogin from "@/pages/codeLogin";
// 注册路由
const router = new VueRouter({
  routes: [
    {
      path: "*",
      redirect: "FindMusic",
    },
    {
      name: "FindMusic",
      path: "/FindMusic",
      component: FindMusic,
    },
    {
      name: "musicList",
      path: "/musicList",
      component: musicList,
    },
    {
      name: "MusicWords",
      path: "/MusicWords",
      component: MusicWords,
    },
    {
      name: "LoginPage",
      path: "/LoginPage",
      component: LoginPage,
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
