<template>
  <div class="codeLogin">
    <div class="box">
      <div class="exit">
        <i>X</i>
      </div>
      <h1>扫码登陆</h1>
      <img :src="codeImg" alt="" id="qrcode" />
      <h6>二维码扫描状态</h6>
      <h4>请使用 <span>网易云app</span> 扫码登录</h4>
      <h5 @click="toLogin">选择其他方式登录></h5>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "codeLogin",
  mounted() {
    this.$store.dispatch("userStore/codeKey");
  },
  methods: {
    toLogin() {
      this.$router.push({ name: "loginPage" });
    },
  },
  computed: {
    ...mapGetters("userStore", ["codeImg", "codeState"]),
  },
};
</script>

<style lang='less' scoped>
.codeLogin {
  position: absolute;
  left: 40%;
  top: 150px;
  width: 380px;
  height: 530px;
  padding: 10px;
  border-radius: 10px;
  margin: 50px auto;
  border: 1px solid gray;
  background-color: white;
  .box {
    text-align: center;
    position: relative;
    .exit {
      height: 30px;
      i {
        float: right;
        margin-right: 10px;
      }
    }
    #qrcode {
      margin-top: 60px;
      width: 170px;
      height: 170px;
    }
    h4 {
      margin: 50px 0;
      span {
        color: #0c73c2;
      }
    }
    h5 {
      cursor: pointer;
      display: inline-block;
      color: rgb(82, 82, 82);
      &:hover {
        color: #ec4141;
      }
    }
  }
}
</style>