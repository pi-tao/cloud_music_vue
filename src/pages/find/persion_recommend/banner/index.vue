<template>
  <!-- 轮播图 -->
  <div class="lbt">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="banner in banners"
          :key="banner.encodeId"
        >
          <a><img :src="banner.imageUrl" /></a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import { mapState } from "vuex";
export default {
  name: "banner_",
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: -1,
      autoplay: true,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    this.$store.dispatch("musicStore/getBanner");
  },
  computed: {
    ...mapState("musicStore", ["banners"]),
  },
};
</script>

<style lang='less' scoped>
@mc: #ec4141;
@bc: #bf3b30;
@bgc: #f5f5f6;
@border_c: #e0e0e1;
@grey: #9f9f9f;
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
</style>