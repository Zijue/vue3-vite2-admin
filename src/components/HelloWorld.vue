<script setup lang="ts">
import butterfly from "@/assets/butterfly.png"
defineProps<{ msg: string }>()
</script>
<template>
  <h1>{{ msg }}</h1>
  <a>超链接</a>
  <h2 :class="$style.link">h2</h2>
  <h3>less</h3>
  <h4>scss</h4>
  <div class="postcss"></div>
  <img src="@/assets/butterfly.png" style="width: 100px" />
  <img :src="butterfly" style="width: 100px" />
  <div class="butterfly"></div>
</template>
<style scoped>
a {
  color: red;
}
</style>
<style module>
.link {
  color: green;
}
</style>
<style scoped lang="less">
h3 {
  color: @color;
}
</style>
<style scoped lang="scss">
h4 {
  color: $color;
}
</style>
<style scoped>
.postcss {
  height: 30px;
  width: 60px;
  background-color: orange;
  transform: rotate(25deg);
}
</style>
<style scoped>
.butterfly {
  height: 71px;
  width: 100px;
  background-image: url(@/assets/butterfly.png);
  background-size: contain;
}
</style>
