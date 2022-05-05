<template>
  <div>
    <video :src="videoUrl" controls class="video"></video>
    <div class="relateVideo">
      <h4>相关推荐></h4>
      <div class="vi">
        <img src="@/assets/1.jpg" alt="视频" /><span>123</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "musicDetail",
  computed: {
    ...mapState("musicStore", ["videoUrl"]),
  },
};
</script>

<style lang='less' scoped>
.video {
  width: 600px;
  height: 350px;
}
.relateVideo {
  float: right;
  width: 350px;
  margin: 5px;
  background-color: pink;
  h4 {
    font-weight: 400;
  }
  .vi {
    margin: 5px 0;
    height: 100px;
    img {
      width: 150px;
      height: 100px;
      vertical-align: top;
    }
  }
}
</style>