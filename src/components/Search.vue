<script setup lang="ts">
const emit = defineEmits<{
  (e: 'search', value: string): void
}>();

const handleSearch = (e: KeyboardEvent) => {
  emit('search', (e.target as HTMLInputElement).value);
}

</script>

<template>
  <div class="component-search-container">
    <div class="icon">
      <van-icon name="search" size="40rem" />
    </div>
    <input type="text" placeholder="搜索歌曲、专辑、音乐人" @keydown.enter="handleSearch">
  </div>
</template>

<style scoped>
.component-search-container {
  width: 100%;
  height: 80rem;
  background-color: #fff;
  border-radius: 8rem;
  display: flex;
}

.component-search-container .icon {
  width: 80rem;
  height: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12rem;
}

.component-search-container input {
  flex: 1;
  padding: 0;
  border: none;
  font-family: Source Han Sans CN, serif;
  font-size: 28rem;
  color: #767676;
}
</style>