import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "./store";
import { Pagination } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Pagination);
// 1.注册全局组件
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
