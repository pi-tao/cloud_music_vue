<template>
  <div>
    <div class="video" v-if="!videoList">
      <ul @click="toVideo">
        <li
          v-for="video in videoList"
          :key="video.data.vid"
          v-show="video.data.title"
        >
          <div class="video_detail">
            <img :src="video.data.coverUrl" :data-vid="video.data.vid" />
            <h5>{{ video.data.title }}</h5>
          </div>
        </li>
      </ul>
      <el-pagination
        class="page"
        :page-size="60"
        :pager-count="11"
        layout="prev, pager, next"
        :total="500"
      >
      </el-pagination>
    </div>
    <div v-if="videoList">登录后才能加载出视频</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "musicVideo",
  mounted() {
    this.$store.dispatch("musicStore/videoList");
  },
  computed: {
    ...mapState("musicStore", ["videoList"]),
  },
  methods: {
    toVideo(e) {
      if (e.target.nodeName == "IMG") {
        let vid = e.target.dataset.vid;
        // console.log(vid);
        this.$store.dispatch("musicStore/videoUrl", vid);
        this.$store.dispatch("musicStore/videoDetail", vid);
        this.$router.push("musicDetail");
      }
    },
  },
};
</script>

<style lang="less" scoped>
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
.video {
  ul {
    width: 1000px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      margin: 10px 0px;
      .video_detail {
        overflow: hidden;
        width: 270px;
        height: 215px;
        border-radius: 5px;
        border: 1px solid @border_c;
        img {
          width: 100%;
          height: 150px;
          cursor: pointer;
          border-radius: 5px 5px 0px 0px;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.1);
          }
        }
        h5 {
          margin: 0 5px;
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>