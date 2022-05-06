<template>
  <div class="content">
    <div class="left">
      <h3 class="back">< 视频详情</h3>
      <video controls :src="videoUrl" autoplay></video>
      <div class="author">
        <img :src="videoAva" alt="" class="ava" />
        <span v-show="videoAvaName">{{ videoAvaName }}</span>
        <span class="gz">关注</span>
      </div>
      <div class="head">
        <h2>{{ videoTitle }}</h2>
        <span>发布时间：2022.5.6</span>
        &nbsp;&nbsp;&nbsp;
        <span>播放量：{{ videoPlayTime }}</span>
      </div>
      <div class="btn">
        <button>赞:(247)</button>
        <button>收藏:(100)</button>
        <button>分享:(99)</button>
      </div>
      <div class="remark">
        <h2>评论 <span>(12)</span></h2>
        <textarea name="" id="" cols="83" rows="6" maxlength="140"></textarea
        ><span class="max">140</span>
        <button class="re">评论</button>
        <div class="hot">
          <h4>精彩评论</h4>
          <ul>
            <li>
              <img src="@/assets/1.jpg" />
              <div class="info">
                <div class="nr">
                  <span class="name">作者名：</span><span>内容</span>
                </div>
                <span> 2022.5.10 </span>
              </div>
              <button>评论</button>
              <button>分享</button>
              <button>点赞</button>
            </li>
            <li>
              <img src="@/assets/1.jpg" />
              <div class="info">
                <div class="nr">
                  <span class="name">作者名：</span><span>内容</span>
                </div>
                <span> 2022.5.10 </span>
              </div>
              <button>评论</button>
              <button>分享</button>
              <button>点赞</button>
            </li>
            <li>
              <img src="@/assets/1.jpg" />
              <div class="info">
                <div class="nr">
                  <span class="name">作者名：</span><span>内容</span>
                </div>
                <span> 2022.5.10 </span>
              </div>
              <button>评论</button>
              <button>分享</button>
              <button>点赞</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right">
      <h4>相关推荐</h4>
      <ul>
        <li>
          <img src="@/assets/1.jpg" alt="" />
          <div class="title">
            <div>视频标题视频标题视频标题视频标题视频标题视频标题</div>
            <span>作者</span>
          </div>
        </li>
        <li>
          <img src="@/assets/1.jpg" alt="" />
          <div class="title">
            <div>视频标题视频标题视频标题视频标题视频标题视频标题</div>
            <span>作者</span>
          </div>
        </li>
        <li>
          <img src="@/assets/1.jpg" alt="" />
          <div class="title">
            <div>视频标题视频标题视频标题视频标题视频标题视频标题</div>
            <span>作者</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "musicDetail",
  computed: {
    ...mapState("musicStore", ["videoUrl"]),
    ...mapGetters("musicStore", [
      "videoAva",
      "videoCover",
      "videoAvaName",
      "videoUserId",
      "videoDesription",
      "videoTitle",
      "videoId",
      "videoCommentCount",
      "videoPlayTime",
    ]),
  },
};
</script>

<style lang='less' scoped>
.content {
  width: 1000px;

  button {
    cursor: pointer;
  }
  .left {
    width: 620px;
    float: left;
    .back {
      font-weight: 400;
      margin: 10px 0;
    }
    video {
      width: 100%;
      height: 355px;
    }
    .author {
      width: 100%;
      height: 80px;
      .ava {
        width: 50px;
        height: 50px;
        margin: 15px 5px;
        vertical-align: middle;
        border-radius: 50%;
      }
      .gz {
        float: right;
        margin: 20px;
      }
    }
    .head {
      margin: 10px;
      h2 {
        margin: 10px 0;
      }
    }
    .btn {
      margin: 10px 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
      button {
        width: 120px;
        height: 30px;
        cursor: pointer;
        border: 1px solid gray;
        background-color: white;
        border-radius: 20px;
        margin-right: 10px;
      }
    }
    .remark {
      width: 100%;
      position: relative;
      h2 {
        margin: 5px 0;
      }
      span {
        font-weight: 400;
        font-size: 12px;
      }
      textarea {
        resize: none;
        border-radius: 5px;
      }
      .max {
        position: absolute;
        top: 110px;
        right: 10px;
      }
      .re {
        float: right;
        margin: 10px;
        width: 80px;
        height: 30px;
        border: 1px solid gray;
        background-color: white;
        border-radius: 20px;
      }
      .hot {
        margin-top: 40px;
        ul {
          padding: 0;
          li {
            list-style: none;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #ccc;
            img {
              margin: 5px;
              width: 40px;
              height: 40px;
              vertical-align: top;
              border-radius: 50%;
            }
            .info {
              display: inline-block;
              line-height: 20px;
              .nr {
                .name {
                  color: rgb(50, 78, 168);
                }
              }
              span {
                color: gray;
              }
            }
            button {
              float: right;
              margin-top: 20px;
              border: 1px solid gray;
              background-color: white;
              cursor: pointer;
              margin-right: 10px;
              border-radius: 5px;
              font-size: 12px;
              color: gray;
              &:hover {
                background-color: rgb(236, 236, 236);
              }
            }
          }
        }
      }
    }
  }
  .right {
    width: 352px;
    float: right;
    h4 {
      margin: 10px 0;
      font-weight: 400;
    }
    ul {
      width: 100%;
      padding: 0;
      li {
        margin: 10px 0;
        list-style: none;
        height: 80px;
        img {
          width: 140px;
          height: 80px;
          border-radius: 5px;
          vertical-align: top;
        }
        .title {
          width: 205px;
          height: 80px;
          display: inline-block;
          display: inline-block;
          div {
            height: 40px;
            overflow: hidden;
            margin-bottom: 15px;
          }
          span {
            color: gray;
          }
        }
      }
    }
  }
}
</style>