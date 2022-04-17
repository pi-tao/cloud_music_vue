<template>
  <div>
    <div class="content" v-show="musicWordsName">
      <div class="album">
        <img src="@/assets/album.png" alt="" :style="albumStyle" />
      </div>
      <div class="words">
        <h2>《{{ musicWordsName }}》</h2>
        <div class="list">
          <ul>
            <li v-for="(word, index) in musicWords" :key="index">{{ word }}</li>
          </ul>
        </div>
      </div>
      <div>3</div>
    </div>
    <div v-show="!musicWordsName" class="error">歌曲暂未播放，无法显示歌词</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MusicWords",
  data() {
    return {
      musicWordsName: "",
      albumStyle: {
        transform: undefined,
        transition: undefined,
      },
    };
  },
  mounted() {
    this.$bus.$on("musicWordsName", (data) => {
      this.musicWordsName = data;
    });
  },
  computed: {
    ...mapState("MusicWordsStore", ["musicWords"]),
  },
  watch: {
    musicWordsName() {
      this.albumStyle.transform = "rotate(5000deg)";
      this.albumStyle.transition = "all 500s";
    },
  },
};
</script>

<style lang="less" scoped>
li {
  list-style: none;
}
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
.content {
  width: 1000px;
  height: 880px;
  display: flex;
  justify-content: space-around;
  div {
    width: 300px;

    margin-top: 40px;
  }
  .album {
    height: 540px;
    img {
      margin-top: 120px;
      width: 100%;
      border-radius: 55%;
    }
  }
  .words {
    height: 540px;
    text-align: center;
    .list {
      margin: 20px auto;
      width: 300px;
      height: 480px;
      line-height: 30px;
      overflow-y: auto;
    }
  }
}
.error {
  margin: 150px;
  font-size: 50px;
}
</style>