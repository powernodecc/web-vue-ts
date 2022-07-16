<script setup lang="ts">

</script>

<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center">
    <div class="w-[720px] bg-white grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="grid flex-col gap-3 p-5">
        <h2 class="text-center text-gray-700 text-lg mt-2">用户登录</h2>
        <div>
          <input
              class="p-2 mt-2 border w-full border-violet-200 outline-none rounded-sm placeholder:text-xs ring-violet-600 ring-offset-2 duration-300  focus:ring-2 focus:border-white"
              type="text" placeholder="请输入用户名或邮箱">
          <input
              class="p-2 mt-5 border w-full border-violet-200 outline-none rounded-sm placeholder:text-xs ring-violet-600 ring-offset-2 duration-300 focus:ring-2 focus:border-white"
              type="text" placeholder="请输入密码">
          <div class="text-xs mt-2 translate-x-2 text-violet-500">账号长度不正确 | 帐号或密码错误</div>
        </div>
        <HdButton>登录</HdButton>

        <div class="flex justify-center mt-5">
          <a class="py-1 px-2 text-sm hover:text-violet-500 duration-200" href="">网站首页</a>
          <router-link class="py-1 px-2 text-sm hover:text-violet-500 duration-200" :to="{name:'auth.register'}">用户注册</router-link>
          <a class="py-1 px-2 text-sm hover:text-violet-500 duration-200" href="">找回密码</a>
        </div>

      </div>

      <div class="relative">
        <img class="w-full h-full absolute object-cover" src="/public/login.jpg" alt=""/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>