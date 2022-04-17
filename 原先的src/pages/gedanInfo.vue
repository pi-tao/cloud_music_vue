<template>
  <div class="gedanlist">
    <div class="top" v-show="gedanName">
      <img :src="gedanImg" alt="" />
      <div class="info">
        <h4>{{ gedanName }}</h4>
        <h6>
          <img :src="gedanCreatorImg" v-if="gedanCreatorImg" /><span>{{
            gedanCreatorName
          }}</span
          ><i>创建时间</i>
        </h6>
        <ul class="btn">
          <li>播放全部</li>
          <li>收藏</li>
          <li>分享</li>
          <li>下载全部</li>
        </ul>
        <div class="b">
          <ul>
            <li>标签:<span>喜欢你</span></li>
            <li>
              歌曲数量:<span>{{ musicList.length }}</span>
            </li>
            <li>
              简介:<span class="jianjie">{{ gedanJianjie }}</span>
            </li>
          </ul>
        </div>
      </div>
      <ul class="musicList" @click="getMusic">
        <li v-for="(music, index) in musicList" :key="music.id">
          <i> {{ index }} </i
          ><em
            :data-musicId="music.id"
            :data-musicAuthor="music.ar[0].name"
            :data-musicIndex="index"
            >{{ music.name }} </em
          ><span>{{ music.ar[0].name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "gedanInfo",
  computed: {
    ...mapGetters("FindMusicStore", [
      "gedanName",
      "gedanImg",
      "gedanJianjie",
      "gedanCreatorName",
      "gedanCreatorImg",
      "gedanBiaoQian",
    ]),
    ...mapState("FindMusicStore", ["musicList"]),
  },
  methods: {
    getMusic(e) {
      if (e.target.nodeName == "EM") {
        let id = e.target.dataset.musicid;
        let Music = {
          musicname: e.target.innerText,
          author: e.target.dataset.musicauthor,
          index: e.target.dataset.musicindex,
        };
        this.$store.dispatch("SearchMusic/SearchMusic", id);
        this.$store.commit("FindMusicStore/MUSICNAME", Music);
      }
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