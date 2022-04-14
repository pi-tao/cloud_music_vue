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
  ],
});
// 暴露router
export default router;
