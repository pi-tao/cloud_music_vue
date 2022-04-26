<template>
  <!-- 推荐 -->
  <div class="tuijian">
    <h3 @click="to_gedan">推荐歌单 ></h3>
    <div class="gedan" @click="toGedanListInfo">
      <ul>
        <li v-for="play in playlist" :key="play.id">
          <div class="gedan_detail">
            <img :src="play.coverImgUrl" :data-gedanid="play.id" />
            <h5>{{ play.description }}</h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "rec_list",
  mounted() {
    this.$store.dispatch("musicStore/gedan_list");
  },
  methods: {
    to_gedan() {
      this.$router.push({ name: "gedan_list" });
    },
    toGedanListInfo(e) {
      if (e.target.dataset) {
        let id = e.target.dataset.gedanid;
        // console.log(id);
        this.$router.push({ name: "list_info" });
        this.$store.dispatch("musicStore/getGedanInfo", id);
      }
    },
  },
  computed: {
    ...mapGetters("musicStore", ["playlist"]),
  },
};
</script>

<style lang='less' scoped>
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
// 推荐歌单
.tuijian {
  margin-top: 10px;
  text-indent: 1em;
  h3 {
    width: 150px;
    margin: 5px 0;
    cursor: pointer;
  }
  li {
    text-indent: 0;
    display: inline-block;
  }
  div {
    display: inline-block;
  }
  .gedan {
    ul {
      width: 1000px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        margin: 10px 0px;
        .gedan_detail {
          overflow: hidden;
          width: 167px;
          height: 215px;
          border-radius: 5px;
          border: 1px solid @border_c;
          img {
            width: 100%;
            height: 167px;
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
}
</style>