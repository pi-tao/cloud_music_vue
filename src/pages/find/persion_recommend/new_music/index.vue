<template>
  <!-- 最新音乐 -->
  <div class="newMusic">
    <h3>最新音乐 ></h3>
    <ul>
      <li>
        <img src="@/assets/4.jpg" alt="" />
        <h5>歌曲内容</h5>
      </li>
      <li>
        <img src="@/assets/4.jpg" alt="" />
        <h5>歌曲内容</h5>
      </li>
      <li>
        <img src="@/assets/4.jpg" alt="" />
        <h5>歌曲内容</h5>
      </li>
      <li>
        <img src="@/assets/4.jpg" alt="" />
        <h5>歌曲内容</h5>
      </li>
      <li>
        <img src="@/assets/4.jpg" alt="" />
        <h5>歌曲内容</h5>
      </li>
      <li>
        <img src="@/assets/4.jpg" alt="" />
        <h5>歌曲内容</h5>
      </li>
      <li>
        <img src="@/assets/4.jpg" alt="" />
        <h5>歌曲内容</h5>
      </li>
      <li>
        <img src="@/assets/4.jpg" alt="" />
        <h5>歌曲内容</h5>
      </li>
      <li>
        <img src="@/assets/4.jpg" alt="" />
        <h5>歌曲内容</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "new_music",
};
</script>

<style lang='less' scoped>
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
.newMusic {
  text-indent: 1em;
  margin: 10px 0;
  h5 {
    display: inline-block;
    margin-left: -10px;
    font-size: 13px;
    font-weight: 400;
  }
  ul {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      width: 290px;
      height: 46px;
      margin: 15px 0;
      border-radius: 5px;
      &:hover {
        background-color: @border_c;
      }
      img {
        width: 46px;
        height: 46px;
        cursor: pointer;
        vertical-align: top;
        margin-left: -15px;
        border-radius: 5px;
      }
    }
  }
}
</style>