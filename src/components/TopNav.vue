<template>
  <!-- 顶部导航 -->
  <nav id="topNav">
    <div class="wrap">
      <div class="icon"><img src="@/assets/icon.png" alt="" /></div>
      <div class="search">
        <button>&lt;</button>
        <button>&gt;</button>
        <label for="search"
          ><input
            type="text"
            placeholder="搜索"
            id="search"
            v-model="musicName"
            @keyup.enter="searchMusicId(musicName)"
        /></label>
        <button @click="searchMusicId(musicName)">搜</button>
      </div>
      <div class="user">
        <img src="@/assets/head.png" alt="" class="head" />
        <span class="userName">
          <i>用户名 v</i>
          <!-- 用户信息 -->
          <div class="info">
            <div class="top">
              <div class="dt">
                <h3>&nbsp;&nbsp;0</h3>
                <i>动态</i>
              </div>
              <div class="gz">
                <h3>&nbsp;&nbsp;0</h3>
                <i>关注</i>
              </div>
              <div class="fs">
                <h3>&nbsp;&nbsp;0</h3>
                <i>粉丝</i>
              </div>
            </div>
            <div class="middle"><span>签到</span></div>
            <div class="bottom">
              <ul>
                <li>
                  <i>&</i>
                  <span>用户中心</span>
                  <em>></em>
                </li>
                <li>
                  <i>&</i>
                  <span>用户中心</span>
                  <em>></em>
                </li>
                <li>
                  <i>&</i>
                  <span>用户中心</span>
                  <em>></em>
                </li>
                <li>
                  <i>&</i>
                  <span>用户中心</span>
                  <em>></em>
                </li>
                <li>
                  <i>&</i>
                  <span>用户中心</span>
                  <em>></em>
                </li>
                <li>
                  <i>&</i>
                  <span>用户中心</span>
                  <em>></em>
                </li>
                <li>
                  <i>&</i>
                  <span>用户中心</span>
                  <em>></em>
                </li>
              </ul>
            </div>
          </div>
        </span>
        <img src="@/assets/vip.png" alt="" class="vip" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      musicName: "",
    };
  },
  methods: {
    searchMusicId(data) {
      if (data != "") {
        this.$store.dispatch("FindMusicStore/getMusicId", data);
        this.$bus.$emit("musicName", this.musicName);
        this.$router.push({
          name: "musicList",
        });
      }
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
// 顶部导航栏
#topNav {
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  .wrap {
    top: 0;
    background-color: @mc;
    height: 60px;
    div {
      display: inline-block;
    }
    .icon {
      width: 200px;
      height: 60px;
      vertical-align: middle;
    }
    .search {
      width: 520px;
      padding-left: 30px;
      button {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 0px;
        color: @bgc;
        cursor: pointer;
        margin-right: 10px;
        background-color: @bc;
      }
      #search {
        width: 160px;
        height: 25px;
        margin: 0 10px;
        border: 0px;
        outline: none;
        color: @bgc;
        text-indent: 2em;
        font-size: 10px;
        background-color: @bc;
        border-radius: 15px;
        &::-webkit-input-placeholder {
          color: @border_c;
        }
      }
    }
    .user {
      .head {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        vertical-align: middle;
      }
      .userName {
        position: relative;
        font-size: 12px;
        color: @bgc;
        &:hover .info {
          display: block;
        }
        i {
          padding: 22px 0;
        }
        // 用户信息模块
        .info {
          display: none;
          position: absolute;
          left: -100px;
          top: 38px;
          color: black;
          width: 280px;
          background-color: white;
          border: 1px solid @bgc;
          .top {
            display: flex;
            width: 100%;
            height: 70px;
            justify-content: space-around;
            align-items: center;
          }
          .middle {
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            span {
              padding: 10px 30px;
              color: black;
              border: 1px solid @bgc;
              border-radius: 10px;
              &:hover {
                background-color: @bgc;
              }
            }
          }
          .bottom {
            width: 100%;
            text-indent: 2em;
            li {
              height: 40px;
              padding-right: 5px;
              border-top: 1px solid @bgc;
              line-height: 40px;
              em {
                float: right;
              }
              &:hover {
                background-color: @bgc;
                cursor: pointer;
              }
            }
          }
        }
      }
      .vip {
        vertical-align: middle;
        margin-left: 5px;
        border-radius: 2px;
      }
    }
  }
}
</style>