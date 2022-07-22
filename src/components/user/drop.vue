<script setup lang="ts">

</script>

<template>
  <div class="relative group">
    <div class="grid gap-3 grid-flow-col items-center cursor-pointer justify-center">
      <t-avatar image="/public/index.jpg"/>
      <span class="text-sm ">管理员一号</span>
    </div>
    <section
        class="group-hover:block bg-white absolute grid grid-flow-row z-10 shadow-md w-28 text-sm rounded-md text-center cursor-pointer overflow-hidden hidden">
      <nav class="p-3 hover:bg-violet-700 hover:text-white border-t-2 duration-300">个人中心</nav>
      <nav class="p-3 hover:bg-violet-700 hover:text-white border-t-2 duration-300">官方文档</nav>
      <nav class="p-3 hover:bg-violet-700 hover:text-white border-t-2 duration-300">退出登录</nav>
    </section>
  </div>
</template>

<style>

</style>