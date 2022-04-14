<template>
  <!-- 底部 -->
  <footer id="footer">
    <audio
      :src="musicUrl"
      autoplay
      ref="audio"
      @ended="loopPlay"
      @timeupdate="time"
    ></audio>
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
          <div class="time" @click="control">
            <i ref="T" :style="timeStyle"></i>
          </div>
        </div>
        <div class="list">
          <!-- 歌单 -->
          <span class="iconfont" @click="control">&#xe636;</span>
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
      index: undefined,
      timeStyle: {
        left: 0,
      },
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
      if (this.musicName) {
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
      if (this.$refs.audio.src != "") {
        if (this.index >= 0) {
          let id = this.musicList[this.index + 1]["id"];
          this.$store.dispatch("SearchMusic/SearchMusic", id);
          this.musicName = this.musicList[this.index + 1].name;
          this.author = this.musicList[this.index + 1].artists[0].name;
          this.index += 1;
        }
      }
    },
    time() {
      if (this.$refs.audio.currentTime) {
        let time = this.$refs.audio.currentTime; //获取audio当前时间
        let sumTime = this.$refs.audio.duration; //获取audio总时间
        this.timeStyle.left = ((time / sumTime) * 100).toFixed(3) + "%";
      }
    },
    control(e) {
      if (this.musicName) {
        let x = e.clientX - e.target.offsetLeft - 114;
        let allX = 400;
        let allTime = this.$refs.audio.duration;
        this.$refs.audio.currentTime = (x / allX) * allTime;
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
      z-index: 101;
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
        .time {
          text-align: left;
          display: inline-block;
          position: relative;
          width: 400px;
          height: 5px;
          background-color: @grey;
          border-radius: 3px;
          border: 2px solid @grey;
          i {
            position: absolute;
            top: -5px;
            left: 0;
            font-size: 5px;
            width: 10px;
            height: 10px;
            cursor: pointer;
            border-radius: 50%;
            // transition: all 1s;
            background-color: @bc;
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