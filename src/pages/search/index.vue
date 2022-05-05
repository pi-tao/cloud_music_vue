<template>
  <div class="musicList">
    <h2>搜索 <span> searchText </span></h2>
    <h6>你可能感兴趣</h6>
    <div class="info">
      <img src="@/assets/head.png" alt="" />
      <div class="cont">
        <h5>歌手: musicAuthor</h5>
        <h6>粉丝：5000万，<span>歌曲： songCount </span></h6>
      </div>
    </div>
    <ul>
      <li tabindex="1">单曲</li>
      <li tabindex="1">歌手</li>
      <li tabindex="1">专辑</li>
      <li tabindex="1">视频</li>
      <li tabindex="1">歌单</li>
      <span>共找到 songCount 首歌</span>
    </ul>
    <div class="music">
      <div class="btn">
        <button class="a">播放全部</button><button class="b">下载全部</button>
      </div>
      <!-- 歌曲列表 -->
      <ul class="musicList" @click="music">
        <li v-for="(music, index) in musicListInfo" :key="music.id">
          <i> {{ index }} </i
          ><em
            :data-index="index"
            :data-id="music.id"
            :data-name="music.name"
            :data-author="music.artists[0].name"
          >
            {{ music.name }} </em
          ><span> {{ music.artists[0].name }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "search_",
  computed: {
    ...mapState("musicStore", ["gedanInfo", "musicListInfo"]),
  },
  methods: {
    // 1.获取音乐url等信息并播放
    music(e) {
      if (e.target.nodeName == "EM") {
        let musicInfo = {
          address: "search",
          index: e.target.dataset.index,
          id: e.target.dataset.id,
          name: e.target.dataset.name,
          author: e.target.dataset.author,
        };
        this.$store.dispatch("musicStore/musicDetail", musicInfo);
      }
    },
  },
};
</script>

<style lang='less' scoped>
li {
  list-style: none;
}

@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
.musicList {
  text-indent: 1em;
  h2 {
    margin: 10px 0;
  }
  h6 {
    font-weight: 400;
    margin-top: 20px;
  }
  .info {
    margin-left: 18px;
    width: 300px;
    height: 65px;
    &:hover {
      background-color: @border_c;
    }
    div {
      display: inline-block;
    }
    img {
      width: 50px;
      height: 50px;
      margin-top: 8px;
      margin-left: -5px;
      vertical-align: sub;
      border-radius: 50%;
    }
    .cont {
      h6 {
        margin-top: 5px;
      }
    }
  }
  ul {
    width: 1000px;
    li {
      text-indent: 0;
      font-size: 12px;
      text-align: center;
      display: inline-block;
      padding: 5px 10px;
      transition: all 0.2s;
      &:focus {
        font-size: 15px;
        border-bottom: 2px solid @mc;
      }
    }
    span {
      float: right;
      margin-right: 20px;
      color: rgb(114, 114, 114);
      font-size: 3px;
    }
  }
  .music {
    .btn {
      line-height: 60px;
      height: 60px;
      border-bottom: 1px solid @border_c;
      button {
        border: 0px;
        width: 140px;
        height: 30px;
        border-radius: 15px;
        margin: 5px;
      }
      .a {
        color: white;
        background-color: @mc;
        &:hover {
          background-color: @bc;
        }
      }
      .b {
        background-color: @bgc;
        border: 1px solid @grey;
        &:hover {
          background-color: @border_c;
        }
      }
    }
    .musicList {
      text-indent: 0;
      width: 1000px;
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
          margin-right: 20px;
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