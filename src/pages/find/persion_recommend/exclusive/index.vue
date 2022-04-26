<template>
  <!-- 独家放送 -->
  <div class="dujia">
    <h3>独家放送 ></h3>
    <ul>
      <li>
        <img src="@/assets/3.jpg" alt="" />
        <h5>歌曲详情</h5>
      </li>
      <li>
        <img src="@/assets/3.jpg" alt="" />
        <h5>歌曲详情</h5>
      </li>
      <li>
        <img src="@/assets/3.jpg" alt="" />
        <h5>歌曲详情</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "exclusive_",
};
</script>

<style lang='less' scoped>
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
// 独家放送
.dujia {
  h3 {
    text-indent: 1em;
    margin: 10px 0;
  }
  li {
    display: inline-block;
  }
  ul {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      margin: 10px 0;
      width: 290px;
      height: 220px;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid @border_c;
      img {
        width: 100%;
        height: 163px;
        cursor: pointer;
        border-radius: 5px;
      }
      h5 {
        margin: 10px;
        line-height: 20px;
        font-weight: 400;
      }
    }
  }
}
</style>