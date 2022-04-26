<template>
  <div class="login">
    <div class="box" v-if="!userInfo.isLogin">
      <div class="ewm">
        <img src="@/assets/ewm.png" alt="二维码" @click="toqrLogin" /><img
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
          v-model="userInfo.phone"
        /><br />
        <input
          type="password"
          placeholder="请输入密码"
          v-model="userInfo.password"
        /><br />
        <input type="checkbox" id="auto" /><label for="auto">自动登录</label>
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
    <h1 v-if="userInfo.isLogin">您已经成功登录！</h1>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {
      userInfo: {
        phone: undefined,
        password: undefined,
        isLogin: false,
      },
    };
  },
  methods: {
    // 1.判断是否是手机号
    isPoneAvailable(phone) {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(phone)) {
        return false;
      } else {
        return true;
      }
    },
    // 2.判断密码是否6-20位
    isPasswd(s) {
      var patrn = /^(\w){6,20}$/;
      if (!patrn.exec(s)) return false;
      return true;
    },
    // 3.登录
    login() {
      if (this.isPoneAvailable(this.userInfo.phone)) {
        if (this.isPasswd(this.userInfo.password)) {
          this.$store.dispatch("userStore/getUserInfo", this.userInfo);
        } else {
          alert("密码至少是6-20位数");
        }
      } else {
        alert("电话号码有误");
      }
    },
    toqrLogin() {
      this.$router.push({ name: "codeLogin" });
    },
  },
};
</script>

<style lang='less' scoped>
.login {
  position: absolute;
  left: 45%;
  top: 150px;
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
}
</style>