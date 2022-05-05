<template>
  <div class="login">
    <div class="box" v-show="!userInfo.isLogin">
      <div class="ewm">
        <img src="@/assets/ewm.png" alt="二维码" /><img
          src="@/assets/sm.png"
          alt="扫码"
          class="sm"
        /><i>X</i>
      </div>
      <div class="banner"><img src="@/assets/banner.png" alt="" /></div>
      <div class="input">
        <input
          type="text"
          placeholder="请输入账号"
          v-model="user.phone"
        /><br />
        <input
          type="password"
          placeholder="请输入密码"
          v-model="user.password"
        /><br />
        <input type="checkbox" id="auto" />
        <label for="auto">自动登录</label>
      </div>
      <button class="log" @click="login">登 录</button><br />
      <button class="reg">注册</button>
      <div class="app">
        <ul>
          <li>微信</li>
          <li>QQ</li>
          <li>微博</li>
          <li>网易</li>
        </ul>
      </div>
      <input type="checkbox" class="allow" /><span>同意隐私政策</span>
    </div>
    <h1 v-show="userInfo.isLogin">您已经成功登录！</h1>
    <button class="unlogin" @click="unlogin" v-show="userInfo.isLogin">
      退出登录
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "login_",
  data() {
    return {
      user: {
        phone: undefined,
        password: undefined,
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("userStore/login", this.user);
    },
    unlogin() {
      localStorage.removeItem("music_cookie");
      location.reload();
    },
  },
  computed: {
    ...mapState("userStore", ["userInfo"]),
  },
};
</script>

<style lang='less' scoped>
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
.login {
  position: absolute;
  left: 45%;
  top: 50px;
  width: 380px;
  padding: 10px;
  border-radius: 10px;
  margin: 50px auto;
  border: 1px solid gray;
  background-color: white;
  h1 {
    text-align: center;
  }
  .box {
    position: relative;
    .ewm {
      cursor: pointer;
      .sm {
        position: absolute;
        top: 7px;
      }
      i {
        position: absolute;
        left: 340px;
        font-size: 25px;
        color: gray;
        font-style: normal;
      }
    }
    .banner {
      width: 100%;
      height: 140px;
      overflow: hidden;
      background-color: pink;
      img {
        width: 100%;
      }
    }
    .input {
      margin-top: 20px;
      text-align: center;
      input {
        width: 300px;
        height: 40px;
        text-indent: 2em;
        margin-top: 5px;
        border: 0;
        outline: none;
        border-bottom: 1px solid gray;
      }
      #auto {
        float: left;
        width: 15px;
        margin-left: 35px;
      }
      label {
        float: left;
        font-size: 13px;
        cursor: pointer;
        margin-top: 15px;
      }
    }
    .log {
      margin-left: -40px;
      margin-top: 50px;
      width: 260px;
      height: 40px;
      border: 0;
      font-size: 18px;
      color: white;
      cursor: pointer;
      background-color: #ea4848;
      border-radius: 10px;
    }
    .reg {
      margin-top: 10px;
      margin-left: 170px;
      border: 0;
      color: #ea4848;
      background-color: white;
      border-bottom: 1px solid #ea4848;
      cursor: pointer;
    }
    .app {
      ul {
        display: flex;
        list-style: none;
        margin: 20px 0;
        justify-content: space-around;
        li {
          text-align: center;
          line-height: 50px;
          width: 50px;
          height: 50px;
          cursor: pointer;
          border: 1px solid gray;
          border-radius: 50%;
        }
      }
    }
    .allow {
      margin-left: 40px;
    }
    span {
      font-size: 13px;
      margin-left: 5px;
      cursor: pointer;
      &:hover {
        color: #ea4848;
      }
    }
  }
  .unlogin {
    margin-top: 20px;
    margin-left: 50%;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    background-color: white;
    border: 1px solid @grey;
    transform: translate(-50%);
    &:hover {
      background-color: @border_c;
    }
  }
}
</style>