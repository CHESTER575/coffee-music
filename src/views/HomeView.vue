<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
const user: User = {
  name: '张三',
  age: 20,
}
console.log(user);

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
