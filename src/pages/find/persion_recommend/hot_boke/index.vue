<template>
  <!-- 博客 -->
  <div class="boke">
    <h3>热门播客 ></h3>
    <ul>
      <li>
        <img src="@/assets/2.jpg" alt="" />
        <div class="info">
          <h4>歌曲内容</h4>
          <h5>content<br />&nbsp;&nbsp;&nbsp;&nbsp;歌曲简介</h5>
        </div>
      </li>
      <li>
        <img src="@/assets/2.jpg" alt="" />
        <div class="info">
          <h4>歌曲内容</h4>
          <h5>content<br />&nbsp;&nbsp;&nbsp;&nbsp;歌曲简介</h5>
        </div>
      </li>
      <li>
        <img src="@/assets/2.jpg" alt="" />
        <div class="info">
          <h4>歌曲内容</h4>
          <h5>content<br />&nbsp;&nbsp;&nbsp;&nbsp;歌曲简介</h5>
        </div>
      </li>
      <li>
        <img src="@/assets/2.jpg" alt="" />
        <div class="info">
          <h4>歌曲内容</h4>
          <h5>content<br />&nbsp;&nbsp;&nbsp;&nbsp;歌曲简介</h5>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "hot_boke",
};
</script>

<style lang='less' scoped>
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
// 播客
.boke {
  text-indent: 1em;
  h3 {
    margin: 10px 0;
  }
  li,
  div {
    display: inline-block;
    font-size: 13px;
    font-weight: 400;
  }
  ul {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      padding: 0px;
      margin: 5px 0;
      width: 450px;
      height: 77px;
      border-radius: 5px;
      &:hover {
        background-color: @border_c;
      }
      img {
        width: 74px;
        height: 74px;
        margin-top: 1px;
        cursor: pointer;
        vertical-align: top;
        border-radius: 5px;
        margin-left: -16px;
      }
      .info {
        margin-top: 10px;
        h4,
        h5 {
          font-weight: 400;
        }
        h5 {
          margin-top: 18px;
        }
      }
    }
  }
}
</style>