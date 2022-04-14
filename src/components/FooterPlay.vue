<template>
  <!-- 底部 -->
  <footer id="footer">
    <audio :src="musicUrl" autoplay ref="audio" @ended="loopPlay"></audio>
    <div class="wrap">
      <div class="content">
        <img src="@/assets/musicImg.png" alt="" />
        <div class="musicInfo">
          <h4>{{ musicName }}</h4>
          <span>{{ author }}</span>
        </div>
        <div class="play">
          <div class="top">
            <button class="iconfont">&#xe639;</button>
            <button @click="last" class="iconfont">&#xe650;</button>
            <button @click="play" class="iconfont">&#xea81;</button>
            <button @click="next" class="iconfont">&#xe651;</button>
            <button class="iconfont">&#xe727;</button>
          </div>
          <div class="time"></div>
        </div>
        <div class="list">
          <span class="iconfont">&#xe636;</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FooterPlay",
  data() {
    return {
      musicName: "",
      author: "",
      index: 0,
    };
  },
  mounted() {
    this.$bus.$on("musicInfo", (musicName, author, index) => {
      this.musicName = musicName;
      this.author = author;
      this.index = index * 1;
    });
  },
  updated() {
    this.$bus.$emit("author", this.author);
  },
  computed: {
    ...mapState("SearchMusic", ["musicUrl"]),
    ...mapState("FindMusicStore", ["musicList"]),
  },
  methods: {
    play(e) {
      let audio = this.$refs.audio;
      if (audio.src != "") {
        if (audio.paused) {
          audio.play();
          e.target.innerHTML = "&#xea81;";
        } else {
          audio.pause();
          e.target.innerHTML = "&#xe650;";
        }
      }
    },
    // 循环播放
    loopPlay() {
      if (this.index >= 0) {
        let id = this.musicList[this.index + 1]["id"];
        this.$store.dispatch("SearchMusic/SearchMusic", id);
        this.musicName = this.musicList[this.index + 1].name;
        this.author = this.musicList[this.index + 1].artists[0].name;
        this.index += 1;
      }
    },
    // 上一首
    last() {
      if (this.index >= 1) {
        console.log(this.index);
        let id = this.musicList[this.index - 1]["id"];
        this.$store.dispatch("SearchMusic/SearchMusic", id);
        this.musicName = this.musicList[this.index - 1].name;
        this.author = this.musicList[this.index - 1].artists[0].name;
        this.index -= 1;
      }
    },
    // 下一首
    next() {
      if (this.index >= 0) {
        let id = this.musicList[this.index + 1]["id"];
        this.$store.dispatch("SearchMusic/SearchMusic", id);
        this.musicName = this.musicList[this.index + 1].name;
        this.author = this.musicList[this.index + 1].artists[0].name;
        this.index += 1;
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
@font-face {
  font-family: "iconfont"; /* Project id 3231729 */
  src: url("//at.alicdn.com/t/font_3231729_3znze2k597i.woff2?t=1649921927670")
      format("woff2"),
    url("//at.alicdn.com/t/font_3231729_3znze2k597i.woff?t=1649921927670")
      format("woff"),
    url("//at.alicdn.com/t/font_3231729_3znze2k597i.ttf?t=1649921927670")
      format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
// 底部
#footer {
  .wrap {
    .content {
      position: fixed;
      width: 1200px;
      bottom: 0px;
      height: 60px;
      background-color: white;
      border-top: 1px solid @border_c;
      img {
        margin-top: 7px;
        border-radius: 5px;
        vertical-align: top;
      }
      .musicInfo {
        margin-top: 10px;
        margin-left: 5px;
        width: 180px;
        display: inline-block;
        h4 {
          font-size: 12px;
          font-weight: 400;
        }
        span {
          font-size: 8px;
        }
      }
      .play {
        height: 100%;
        width: 700px;
        font-size: 10px;
        vertical-align: top;
        padding-top: 10px;
        text-align: center;
        display: inline-block;
        .top {
          button {
            margin: 0 15px;
            border: 0px;
            width: 30px;
            height: 30px;
            font-size: 20px;
            border-radius: 15px;
            background-color: white;
            &:hover {
              background-color: @border_c;
            }
          }
        }
      }
      .list {
        display: inline-block;
        line-height: 60px;
        .iconfont {
          cursor: pointer;
          font-size: 25px;
        }
      }
    }
  }
}
</style>