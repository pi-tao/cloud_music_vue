<template>
  <div>
    <banner />
    <rec_list />
    <hot_boke />
    <exclusive />
    <new_music />
  </div>
</template>

<script>
import banner from "./banner";
import rec_list from "./rec_list";
import hot_boke from "./hot_boke";
import exclusive from "./exclusive";
import new_music from "./new_music";
export default {
  name: "persion_recommend",
  components: {
    banner,
    rec_list,
    hot_boke,
    exclusive,
    new_music,
  },
};
</script>

<style>
</style>