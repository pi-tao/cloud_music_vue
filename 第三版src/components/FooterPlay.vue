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
        <img v-if="musicImgUrl" :src="musicImgUrl" alt="" />
        <div class="musicInfo">
          <h4>{{ musicName }}</h4>
          <span> {{ musicAuthor }} </span>
        </div>
        <div class="play">
          <div class="top">
            <button>删除</button>
            <button class="iconfont" @click="last">&#xe650;</button>
            <button class="iconfont" @click="play">&#xea81;</button>
            <button class="iconfont" @click="next">&#xe651;</button>
            <button>词</button>
          </div>
          <div class="time" @click="control">
            <i ref="T" :style="timeStyle"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "FooterPlay",
  data() {
    return {
      timeStyle: {
        left: 0,
      },
    };
  },
  computed: {
    ...mapGetters("musicStore", [
      "musicIndex",
      "musicUrl",
      "musicName",
      "musicAuthor",
      "musicAddress",
    ]),
    ...mapState("musicStore", ["musicList", "musicImgUrl"]),
  },
  methods: {
    // 1.播放或者暂停
    play(e) {
      let audio = this.$refs.audio;
      if (audio.src) {
        if (audio.paused) {
          audio.play();
          e.target.innerHTML = "&#xea81;";
        } else {
          audio.pause();
          e.target.innerHTML = "&#xe650;";
        }
      }
    },
    // 2.上一曲
    last() {
      if (this.musicIndex > 0) {
        if (this.musicList) {
          let index = this.musicIndex * 1 - 1;
          if (this.musicAddress == "searchMusicPage") {
            let musicInfo = {
              address: "searchMusicPage",
              index: index,
              id: this.musicList[index].id,
              name: this.musicList[index].name,
              author: this.musicList[index].artists[0].name,
            };
            this.$store.dispatch("musicStore/musicInfo", musicInfo);
          } else if (this.musicAddress == "gedanList") {
            let musicInfo = {
              address: "gedanList",
              index: index,
              id: this.musicList[index].id,
              name: this.musicList[index].name,
              author: this.musicList[index].ar[0].name,
            };
            this.$store.dispatch("musicStore/musicInfo", musicInfo);
          }
        }
      }
    },
    // 3.下一曲
    next() {
      if (this.musicIndex >= 0) {
        if (this.musicList) {
          let index = this.musicIndex * 1 + 1;
          if (this.musicAddress == "searchMusicPage") {
            let musicInfo = {
              address: "searchMusicPage",
              index: index,
              id: this.musicList[index].id,
              name: this.musicList[index].name,
              author: this.musicList[index].artists[0].name,
            };
            this.$store.dispatch("musicStore/musicInfo", musicInfo);
          } else if (this.musicAddress == "gedanList") {
            let musicInfo = {
              address: "gedanList",
              index: index,
              id: this.musicList[index].id,
              name: this.musicList[index].name,
              author: this.musicList[index].ar[0].name,
            };
            this.$store.dispatch("musicStore/musicInfo", musicInfo);
          }
        }
      }
    },
    // 4.顺序播放
    loopPlay() {
      // console.log("播放结束");
      this.next();
    },

    // 5.获取播放进度
    time() {
      if (this.$refs.audio.currentTime) {
        let time = this.$refs.audio.currentTime; //获取audio当前时间
        let sumTime = this.$refs.audio.duration; //获取audio总时间
        this.timeStyle.left = ((time / sumTime) * 100).toFixed(3) + "%";
      }
    },
    // 6.控制播放进度
    control(e) {
      if (this.musicName) {
        let x = (e.offsetX / e.target.offsetWidth).toFixed(2); //offsetX获取鼠标在元素内点击的x坐标，offsetWidth获取元素宽度
        let allTime = this.$refs.audio.duration;
        this.$refs.audio.currentTime = x * allTime;
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
        margin-left: 5px;
        width: 50px;
        height: 50px;
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
            overflow: hidden;
            border-radius: 15px;
            cursor: pointer;
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
          cursor: pointer;
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