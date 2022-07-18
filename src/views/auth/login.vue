<script setup lang="ts">
  import v from "@/plugins/validate"
  import useAuthApi, {LoginVerifyData} from "@/api/useAuthApi";
  import localStore from "@/utils/localStore";
  import {LocalStorageEnum} from "@/enum/localStorageEnum";

  const router = useRouter();
  const {useForm, useField} = v

  const {handleSubmit, errors} = useForm({
    initialValues: {
      loginId: '128@gmail.com',
      password: '123123'
    },
    validationSchema: {
      loginId: {
        required: true,
        regex: /.+@.+\..+|\d{11}/
      },
      password: {
        required: true
      }
    }
  })

  const {value: loginId} = useField("loginId", {}, {label: "账号"})
  const {value: password} = useField("password", {}, {label: "密码"})

  const login = handleSubmit(async (values) => {
    const loginResult = await useAuthApi.login(values as LoginVerifyData)
    console.log(loginResult);
    if (loginResult.code === 200) {
      localStore.set(LocalStorageEnum.TOKEN_NAME, loginResult.data.token, 0)
      await router.push({name: 'admin.home'})
    } else {
    }
  })
</script>

<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center">
    <div class="w-[720px] bg-white grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="grid flex-col gap-3 p-5">
        <h2 class="text-center text-gray-700 text-lg mt-2">用户登录</h2>
        <form @submit="login">
          <input
              v-model="loginId"
              class="p-2 mt-2 border w-full border-violet-200 outline-none rounded-sm placeholder:text-xs ring-violet-600 ring-offset-2 duration-300  focus:ring-2 focus:border-white"
              type="text" placeholder="请输入用户名或邮箱">
          <input
              v-model="password"
              class="p-2 mt-5 border w-full border-violet-200 outline-none rounded-sm placeholder:text-xs ring-violet-600 ring-offset-2 duration-300 focus:ring-2 focus:border-white"
              type="text" placeholder="请输入密码">
          <div class="text-xs mt-2 translate-x-2 text-violet-500 h-2">
            {{ errors.loginId ? '请输入手机号或邮箱' : '' }}
            {{ errors.loginId && errors.password ? ' | ' : '' }}
            {{ errors.password ? '密码不能为空' : '' }}
          </div>
          <HdButton>登录</HdButton>
        </form>

        <div class="flex justify-center mt-2">
          <a class="py-1 px-2 text-sm hover:text-violet-500 duration-200" href="">网站首页</a>
          <router-link class="py-1 px-2 text-sm hover:text-violet-500 duration-200" :to="{name:'auth.register'}">用户注册
          </router-link>
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