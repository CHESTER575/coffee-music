<script setup lang="js"></script>

<template>
  <div class="component-banner-container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped>
.component-banner-container {
  border-radius: 8rem;
}

.my-swipe {
  border-radius: 8rem;
}

.my-swipe .van-swipe-item {
  border-radius: 8rem;
  color: #fff;
  font-size: 40rem;
  line-height: 300rem;
  text-align: center;
  background-color: #39a9ed;
}
</style>