<template>
  <div class="content">
    <!-- 发现音乐导航栏 -->
    <nav class="findNav">
      <ul>
        <li tabindex="1" @click="toRecommend">个性推荐</li>
        <li tabindex="1">专属定制</li>
        <li tabindex="1" @click="toAllPlayList">全部歌单</li>
        <li tabindex="1">排行榜</li>
        <li tabindex="1">最新音乐</li>
      </ul>
    </nav>
    <!-- 推荐歌单 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "findMusicPage",
  methods: {
    toRecommend() {
      this.$router.push({ name: "findMusicRecommend" });
    },
    toAllPlayList() {
      this.$router.push({ name: "allPlayList" });
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
.content {
  width: 1000px;
  .findNav {
    z-index: 99;
    position: fixed;
    width: 1000px;
    top: 60px;
    height: 50px;
    ul {
      background-color: white;
      li {
        line-height: 50px;
        margin: 0 10px;
        cursor: pointer;
        font-size: 13px;
        display: inline-block;
        transition: all 0.3s;
        &:focus {
          font-size: 18px;
          border-bottom: 2px solid @mc;
        }
      }
    }
  }
  .text {
    width: 100%;
    margin-top: 50px;
    .lbt {
      display: flex;
      justify-content: center;
      .swiper-container {
        margin-top: 10px;
        width: 1000px;
        height: 180px;
        img {
          border-radius: 8px;
          width: 100%;
          height: 100%;
        }
      }
      .swiper-slide {
        text-align: center;
        font-size: 18px;
        width: 336px;
        height: 182px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        transition: 500ms;
        transform: scale(0.8);
      }
      .swiper-slide-active,
      .swiper-slide-duplicate-active {
        transform: scale(1);
      }
    }
    // 推荐歌单
    .tuijian {
      margin-top: 10px;
      text-indent: 1em;
      h3 {
        margin: 5px 0;
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
  }
}
</style>