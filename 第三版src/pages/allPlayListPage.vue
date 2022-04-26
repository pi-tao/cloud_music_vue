<template>
  <div class="gedanlist" v-show="gedanlistInfo">
    <div class="top">
      <img :src="gedanlistInfo.coverImgUrl" alt="" />
      <div class="info">
        <h4>{{ gedanlistInfo.name }}</h4>
        <h6>
          <img :src="gedanlistInfo.authorImg" /><span>
            {{ gedanlistInfo.authornickname }} </span
          ><i>创建时间</i>
        </h6>
        <ul class="btn">
          <li>播放全部</li>
          <li>收藏</li>
          <li>分享</li>
          <li>下载全部</li>
        </ul>
        <div class="b">
          <ul>
            <li>标签:<span> </span></li>
            <li>
              歌曲数量:<span> {{ songCount }} </span>
            </li>
            <li>
              <span class="jianjie"
                >简介: &nbsp;&nbsp; {{ gedanlistInfo.description }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <ul class="musicList" @click="sendMusicId">
        <li v-for="(music, index) in musicList" :key="music.id">
          <i> {{ index }} </i
          ><em
            :data-index="index"
            :data-name="music.name"
            :data-id="music.id"
            :data-author="music.ar[0].name"
            >{{ music.name }} </em
          ><span>{{ music.ar[0].name }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style> 