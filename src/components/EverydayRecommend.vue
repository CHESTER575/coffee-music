<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void
}>();
</script>

<template>
  <div class="component-everyday-recommend-container" @click="emit('click')">
    <div class="left">
      <div>
        <van-icon name="notes-o" size="32rem" />
      </div>
      <div class="text">
        每日推荐
      </div>
    </div>
    <div class="right">
      <van-icon name="arrow" size="32rem" />
    </div>
  </div>
</template>

<style scoped>
.component-everyday-recommend-container {
  width: 100%;
  height: 60rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20rem;
  border-radius: 8rem;
}

.component-everyday-recommend-container .left {
  display: flex;
  align-items: center;
}

.component-everyday-recommend-container .left div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.component-everyday-recommend-container .left .text {
  margin-left: 20rem;
  font-size: 24rem;
  line-height: 60rem;
}
</style>