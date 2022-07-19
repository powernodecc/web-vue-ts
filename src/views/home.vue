<script setup lang="ts">

</script>

<template>
  <div class="w-screen h-screen bg-gray-700 flex flex-col justify-center items-center overflow-hidden">
    <img class="w-[160px] h-[160px] rounded-full border-4 border-violet-500 object-cover" src="public/index.jpg" alt="">
    <div class="flex my-6">
      <a class="bg-violet-500 text-white py-2 px-3 rounded-md mx-2 duration-300 hover:bg-violet-700" href="">网站首页</a>
      <router-link class="bg-violet-500 text-white py-2 px-3 rounded-md mx-2 duration-300 hover:bg-violet-700" :to="{name: 'admin.home'}">后台管理</router-link>
      <router-link class="bg-violet-500 text-white py-2 px-3 rounded-md mx-2 duration-300 hover:bg-violet-700" :to="{name: 'auth.login'}">用户登录</router-link>
    </div>
    <div class="text-blue-300 text-sm">一起学习，共同进步</div>
  </div>
</template>

<style lang="scss">

</style>