<template>
  <div class="content">
    <nav class="top">
      <button class="all" tabindex="1" @click="dis">全部分类></button>
      <div class="category" v-show="display">
        <!-- 全部分类 -->
        <ul class="class">
          <li v-for="(sub, index) in gedanSub" :key="index">{{ sub.name }}</li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "allPlayList",
  data() {
    return {
      display: false,
    };
  },
  mounted() {
    this.$store.dispatch("musicStore/playlistCatlist");
  },
  methods: {
    dis() {
      if (this.display) {
        this.display = false;
      } else {
        this.display = true;
      }
    },
  },
  computed: {
    ...mapGetters("musicStore", ["gedanSub", "gedanSub8"]),
  },
};
</script>

<style lang='less' scoped>
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
li {
  list-style: none;
}
.content {
  margin-top: 80px;
  width: 1000px;
  .top {
    position: relative;
    height: 30px;
    margin: 10px;
    .all {
      float: left;
      width: 100px;
      cursor: pointer;
      background-color: white;
      border: 1px solid @border_c;
      line-height: 30px;
      border-radius: 20px;
      &:hover {
        background-color: @border_c;
      }
    }
    .category {
      border-radius: 10px;
      position: absolute;
      top: 34px;
      left: 0;
      width: 750px;
      height: 750px;
      padding-right: 20px;
      border: 1px solid @border_c;
      overflow-y: auto;
      overflow-x: hidden;
      .class {
        float: none;
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;
        opacity: 0.5;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        li {
          width: 15%;
          font-size: 18px;
          text-align: center;
          line-height: 40px;
          border-radius: 5px;
          height: 40px;
          &:hover {
            background-color: @border_c;
          }
        }
      }
    }
  }
}
</style>