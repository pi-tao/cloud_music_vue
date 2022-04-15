<template>
  <main id="middle">
    <div class="wrap">
      <!-- 左边导航栏 -->
      <nav class="leftNav">
        <ul>
          <li tabindex="1" @click="toFindMusic">发现音乐</li>
          <li tabindex="1" @click="toMusicWords">歌词</li>
          <li tabindex="1">视频</li>
          <li tabindex="1">关注</li>
          <li tabindex="1">直播</li>
          <li tabindex="1">私人 FM</li>
        </ul>
        <h3>我的音乐</h3>
        <ul>
          <li tabindex="1">本地与下载</li>
          <li tabindex="1">最近播放</li>
          <li tabindex="1">我的云盘</li>
          <li tabindex="1">我的播客</li>
          <li tabindex="1">我的收藏</li>
        </ul>
        <h3>我的歌单</h3>
        <ul>
          <li tabindex="1">我的喜欢</li>
          <li tabindex="1">歌单</li>
          <li tabindex="1">歌单</li>
          <li tabindex="1">歌单</li>
          <li tabindex="1">歌单</li>
        </ul>
      </nav>
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </main>
</template>

<script>
export default {
  name: "MiddleMain",
  methods: {
    toFindMusic() {
      this.$router.push({
        name: "FindMusic",
      });
    },
    toMusicWords() {
      this.$router.push({
        name: "MusicWords",
      });
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
// 中间内容
#middle {
  margin-top: 60px;
  // 左边导航
  .leftNav {
    z-index: 100;
    position: fixed;
    top: 60px;
    width: 200px;
    height: 880px;
    background-color: white;
    border-right: 1px solid @border_c;
    overflow: auto;
    h3 {
      font-size: 15px;
      color: @grey;
    }
    li {
      height: 38px;
      line-height: 38px;
      text-indent: 1em;
      font-size: 15px;
      transition: all 0.2s;
      cursor: pointer;
      &:focus {
        background-color: @bgc;
        font-size: 18px;
      }
    }
  }
  // 主题部分
  .main {
    overflow-y: auto;
    overflow-x: hidden;
    margin-left: 200px;
    margin-bottom: 60px;
    //    height: 880px;
    background-color: @bgc;
    span {
      font-size: 2000px;
    }
  }
}
</style>