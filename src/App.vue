<template>
  <div id="app">
    <TopNav />
    <MiddleMain />
    <FooterPlay />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import MiddleMain from "@/components/MiddleMain.vue";
import FooterPlay from "@/components/FooterPlay.vue";
export default {
  name: "App",
  components: {
    TopNav,
    MiddleMain,
    FooterPlay,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
.wrap {
  width: 1200px;
  margin: 0 auto;
}
</style>
