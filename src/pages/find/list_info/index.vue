<template>
  <div class="gedanlist">
    <div class="top" v-show="gedanInfo.coverImgUrl">
      <img :src="gedanInfo.coverImgUrl" alt="" />
      <div class="info">
        <h4>{{ gedanInfo.name }}</h4>
        <h6>
          <img :src="gedanInfo.authorImg" /><span>
            {{ gedanInfo.authornickname }} </span
          ><i>创建时间</i>
        </h6>
        <ul class="btn">
          <li @click="playAll">播放全部</li>
          <li>收藏</li>
          <li>分享</li>
          <li>下载全部</li>
        </ul>
        <div class="b">
          <ul>
            <li>标签:<span> </span></li>
            <li>
              歌曲数量:<span> {{ gedanInfo.total }}</span>
            </li>
            <li>
              <span class="jianjie"
                >简介: &nbsp;&nbsp; {{ gedanInfo.description }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <ul class="musicList" @click="music">
        <li v-for="(music, index) in musicListInfo" :key="music.id">
          <i> {{ index }} </i
          ><em
            :data-index="index"
            :data-id="music.id"
            :data-name="music.name"
            :data-img="music.al.picUrl"
            :data-author="music.ar[0].name || undefined"
          >
            {{ music.name }} </em
          ><span> {{ music.ar[0].name }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "list_info",
  computed: {
    ...mapState("musicStore", ["gedanInfo", "musicListInfo"]),
  },
  methods: {
    // 1.获取音乐url等信息并播放
    music(e) {
      if (e.target.nodeName == "EM") {
        let musicInfo = {
          index: e.target.dataset.index,
          id: e.target.dataset.id,
          name: e.target.dataset.name,
          img: e.target.dataset.img,
          author: e.target.dataset.author,
        };
        this.$store.dispatch("musicStore/musicInfo", musicInfo);
      }
    },
    // 2.播放歌单第一首
    playAll() {
      let index = 0;
      let musicInfo = {
        index: index,
        id: this.musicListInfo[index].id,
        name: this.musicListInfo[index].name,
        img: this.musicListInfo[index].al.picUrl,
        author: this.musicListInfo[index].ar[0].name,
      };
      this.$store.dispatch("musicStore/musicInfo", musicInfo);
    },
  },
};
</script>
<style lang='less' scoped>
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
.gedanlist {
  width: 990px;
  height: 880px;
  .top {
    width: 95%;
    height: 180px;
    margin: 30px 0px 30px 30px;
    background-color: white;
    border-radius: 10px;
    img {
      width: 180px;
      height: 180px;
      border-radius: 10px;
      margin-right: 20px;
    }
    .info {
      display: inline-block;
      height: 180px;
      width: 740px;
      vertical-align: top;
      h6 {
        img {
          margin-top: 5px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }
        span {
          display: inline-block;
          margin-left: -10px;
          margin-top: -25px;
          color: #507daf;
          vertical-align: middle;
        }
        i {
          font-style: normal;
          display: inline-block;
          vertical-align: top;
          margin-left: 5px;
          margin-top: 15px;
          color: #676767;
        }
      }
      .btn {
        height: 35px;
        li {
          list-style: none;
          display: inline-block;
          width: 135px;
          height: 35px;
          text-align: center;
          line-height: 35px;
          margin-right: 20px;
          border-radius: 25px;
          cursor: pointer;
          color: gray;
          border: 1px solid gray;
          &:hover {
            background-color: #e5e5e5;
          }
          &:nth-child(1) {
            color: white;
            border: 0;
            background-color: #d04135;
            &:hover {
              background-color: #b13226;
            }
          }
        }
      }
      .b {
        margin-top: 5px;
        li {
          font-size: 8px;
          list-style: none;
          span {
            margin-left: 5px;
            color: #507daf;
            overflow: hidden;
          }
          .jianjie {
            display: inline-block;
            height: 66px;
            overflow: hidden;
          }
        }
      }
    }
    .musicList {
      text-indent: 0;
      margin-top: 40px;
      margin-left: -30px;
      border-top: 1px solid @border_c;
      width: 990px;
      li {
        text-align: left;
        height: 30px;
        padding-left: 20px;
        width: 100%;
        &:hover {
          background-color: @border_c;
        }
        div {
          display: inline-block;
        }
        i {
          width: 40px;
          display: inline-block;
          position: relative;
          top: -9px;
        }
        em {
          display: inline-block;
          width: 320px;
          height: 30px;
          line-height: 30px;
          overflow: hidden;
          cursor: pointer;
        }
        span {
          float: none;
          position: relative;
          top: -9px;
        }
      }
    }
  }
}
</style>