<script setup lang="ts">
  const showTips = ref<boolean>(false)
</script>

<template>
  <div class="relative flex justify-end">
    <div class="bg-cover h-screen w-screen absolute min-h-[720px]"
         style="background-image: url('/public/r1.jpg')"></div>
    <div class="absolute h-[600px] w-[500px]  bg-gray-50 rounded-2xl translate-y-[70px] -translate-x-[100px]">
      <main class="grid gap-2">
        <div class="flex flex-row justify-between">
          <section>
            <h2 class="ml-8 mt-10 text-2xl">欢迎注册</h2>
            <h3 class="text-md mt-3 ml-10">已有账号? 前往
              <router-link class="text-violet-500 ml-0.5 hover:text-violet-700" :to="{name:'auth.login'}">登录
              </router-link>
            </h3>
          </section>
          <Transition appear class="animate__animated" enter-active-class="animate__fadeInRight"
                      leave-active-class="animate__fadeOutLeft">
            <div v-if="showTips"
                 class="mt-10 mr-5 bg-violet-600 h-10 py-6 px-8 flex justify-center items-center rounded-md cursor-pointer">
              <span class="text-sm text-gray-100 ">验证码不正确</span>
            </div>
          </Transition>
        </div>
        <div class="p-3 grid gap-8 mt-8">
          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">用户名</span>
            <div class="flex flex-col flex-1">
              <input
                  class="border-violet-200 border rounded-md p-2 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white placeholder:text-xs"
                  type="text" placeholder="请设置用户名"/>
            </div>
          </div>
          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">
              <span>账</span>
              <span class="p-1.5"/>
              <span>号</span></span>
            <div class="flex flex-col flex-1">
              <input
                  class="border-violet-200 border rounded-md p-2 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white placeholder:text-xs "
                  type="text" placeholder="请输入手机号或邮箱">
            </div>
          </div>
          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">
              <span>密</span>
              <span class="p-1.5"/>
              <span>码</span>
            </span>
            <div class="flex flex-col flex-1">
              <input
                  class="border-violet-200 border rounded-md p-2 flex-1 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white placeholder:text-xs"
                  type="text" placeholder="请设置登录密码"/>
            </div>
          </div>

          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">
              <span>验证码</span>
            </span>
            <div class="flex flex-col flex-1 ">
              <input
                  class="border-violet-200 border rounded-md p-2 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white placeholder:text-xs"
                  type="text" placeholder="点击右侧按钮获取验证码"/>
            </div>
            <div
                class="p-3 ml-6 h-[42px] cursor-pointer text-center border-gray-200 border rounded-md bg-white text-xs flex-1 duration-300 hover:border-violet-500 hover:text-violet-500"
                @click="">
              <span>发送验证码</span>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <button
              class="bg-violet-700 py-3 mt-10 px-10 w-[399px] text-2xs text-white rounded-2xl duration-300 hover:bg-violet-800"
              @click="">
            注册
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
  .animate__fadeInDown {
    animation-duration: 1s;
  }

  .animate__fadeOutDown {
    animation-duration: 2s;
  }
</style>