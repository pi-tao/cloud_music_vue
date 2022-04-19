<template>
  <div class="gedanlist">
    <div class="top" v-if="gedanImg">
      <img :src="gedanImg" alt="" />
      <div class="info">
        <h4>{{ gedanName }}</h4>
        <h6>
          <img :src="gedanAuthorImg" /><span> {{ gedanAuthorName }} </span
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
            <li>
              标签:<span v-for="(tag, index) in gedanTags" :key="index"
                >{{ tag }}
              </span>
            </li>
            <li>
              歌曲数量:<span> {{ gedanMusicList.length }} </span>
            </li>
            <li>
              <span class="jianjie"
                >简介: &nbsp;&nbsp;{{ gedanDescrption }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <ul class="musicList" @click="senMusicInfo">
        <li v-for="(music, index) in gedanMusicList" :key="music.id">
          <i> {{ index }} </i
          ><em
            :data-index="index"
            :data-musicname="music.name"
            :data-musicid="music.id"
            :data-musicauthor="music.ar[0].name"
            >{{ music.name }} </em
          ><span>{{ music.ar[0].name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "gedanList",
  computed: {
    ...mapGetters("findMusicStore", [
      "gedanMusicList",
      "gedanTotal",
      "gedanImg",
      "gedanDescrption",
      "gedanName",
      "gedanAuthorImg",
      "gedanAuthorName",
      "gedanAuthorSignature",
      "gedanPlayCount",
      "gedanShareCount",
      "gedanTags",
    ]),
  },
  methods: {
    senMusicInfo(e) {
      if (e.target.nodeName == "EM") {
        let musicInfo = {
          index: e.target.dataset.index,
          musicname: e.target.dataset.musicname,
          musicid: e.target.dataset.musicid,
          musicauthor: e.target.dataset.musicauthor,
        };
        // console.log(musicInfo);
        this.$store.dispatch("musicStore/getMusic", musicInfo);
        this.$store.commit("musicStore/GEDANLIST", this.gedanMusicList);
      }
    },
    playAll() {
      let musicInfo = {
        index: 0,
        musicname: this.gedanMusicList[0].name,
        musicid: this.gedanMusicList[0].id,
        musicauthor: this.gedanMusicList[0].ar[0].name,
      };
      // console.log(musicInfo);
      this.$store.dispatch("musicStore/getMusic", musicInfo);
      this.$store.commit("musicStore/GEDANLIST", this.gedanMusicList);
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
          width: 30px;
          display: inline-block;
        }
        em {
          display: inline-block;
          width: 320px;
          cursor: pointer;
        }
        span {
          float: none;
        }
      }
    }
  }
}
</style>