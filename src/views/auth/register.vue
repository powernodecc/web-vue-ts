<script setup lang="ts">
  import {ref} from "vue";
  import v from "@/plugins/validate"
  import useAuthApi, {RegisterProfile} from "@/api/useAuthApi";
  import localStore from "@/utils/localStore";
  import {LocalStorageEnum} from "@/enum/localStorageEnum";

  const router = useRouter()
  const {Form, Field, useForm} = v

  const {handleSubmit, errors} = useForm({
    initialValues: {
      username: '',
      loginId: '',
      password: '',
      verifyCode: ''
    },
    validationSchema: {
      username: {
        required: true,
        min: 3
      },
      loginId: {
        required: true,
        email: true
      },
      password: {
        required: true,
        min: 3
      },
      verifyCode: {
        required: true
      }
    }
  })

  const sendTime = ref<number>(3)
  const isClick = ref<boolean>(false)
  const getVerifyCode = () => {

    if (isClick.value === true) {
      console.log("isClick")
      return
    }
    isClick.value = true
    const timer = setInterval(() => {
      if (sendTime.value <= 1) {
        sendTime.value = 3;
        isClick.value = false
        clearInterval(timer)
        return
      }
      sendTime.value = sendTime.value - 1
    }, 1000)
  }

  const register = handleSubmit(async (values: RegisterProfile) => {
    const registerResult = await useAuthApi.register(values)
    if (registerResult.code === 200) {
      const loginResult = await useAuthApi.login({loginId: values.loginId, password: values.password})
      if (loginResult.code === 200) {
        localStore.set(LocalStorageEnum.TOKEN_NAME, loginResult.data.token, 0);
        await router.push({name: 'admin.home'})
      }
    }
  })
</script>

<template>
  <div class="relative flex justify-end">
    <div class="bg-cover h-screen w-screen absolute min-h-[720px]"
         style="background-image: url('/public/r1.jpg')"></div>
    <div class="absolute h-[600px] w-[500px]  bg-gray-50 rounded-2xl translate-y-[70px] -translate-x-[100px]">
      <form class="grid gap-2" @submit="register">
        <div>
          <h2 class="ml-8 mt-10 text-2xl">欢迎注册</h2>
          <h3 class="text-md mt-3 ml-10">已有账号? 前往
            <router-link class="text-violet-500 ml-0.5 hover:text-violet-700" :to="{name:'auth.login'}">登录</router-link>
          </h3>
        </div>
        <div class="p-3 grid gap-3 mt-8">
          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">用户名</span>
            <Field name="username" label="用户名" #default="{field,errorMessage}">
              <div class="flex flex-col flex-1">
                <input
                    class="border-violet-200 border rounded-md p-2 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white placeholder:text-xs"
                    type="text" v-bind="field" placeholder="请设置用户名"/>
                <div class="text-sm mt-2 text-red-500 h-5">{{ errors.username }}</div>
              </div>
            </Field>
          </div>
          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">
              <span>账</span>
              <span class="p-1.5"/>
              <span>号</span></span>
            <div class="flex flex-col flex-1">
              <Field name="loginId" label="账号" #default="{field,errorMessage}">
                <input
                    class="border-violet-200 border rounded-md p-2 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white placeholder:text-xs "
                    type="text" v-bind="field" placeholder="请输入手机号或邮箱">
                <div class="text-sm mt-2 text-red-500 h-5">{{ errors.loginId }}</div>
              </Field>
            </div>
          </div>
          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">
              <span>密</span>
              <span class="p-1.5"/>
              <span>码</span>
            </span>
            <Field name="password" label="密码" #default="{field,errorMessage}" :rules="{required:true}">
              <div class="flex flex-col flex-1">
                <input
                    class="border-violet-200 border rounded-md p-2 flex-1 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white placeholder:text-xs"
                    type="text" v-bind="field" placeholder="请设置登录密码"/>
                <div class="text-sm mt-2 text-red-500 h-5">{{ errors.password }}</div>
              </div>
            </Field>
          </div>

          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">
              <span>验证码</span>
            </span>
            <Field name="verifyCode" label="验证码" #default="{field,errorMessage}" :rules="{required:true}">
              <div class="flex flex-col flex-1 ">
                <input
                    class="border-violet-200 border rounded-md p-2 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white placeholder:text-xs"
                    type="text" v-bind="field" placeholder="点击右侧按钮获取验证码"/>
                <div class="text-sm mt-2 text-red-500 h-5 ">{{ errors.verifyCode }}</div>
              </div>
            </Field>
            <button
                class="p-3 ml-6 h-[42px] border-gray-200 border rounded-md bg-white text-xs flex-1 duration-300 hover:border-violet-500 hover:text-violet-500"
                @click="getVerifyCode">
              <span>{{ isClick ? sendTime : "发送验证码" }}</span>
            </button>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <button
              class="bg-violet-700 py-3 mt-5 px-10 w-[399px] text-2xs text-white rounded-2xl duration-300 hover:bg-violet-800">
            注册
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">

</style>
<!--
      <Form class=" flex flex-col justify-center items-center" @submit="onSubmit">
        <Field name="username" #default="{field ,errorMessage}" :rules="{required}" label="账号">
          <input class="outline-none border-violet-500 border-8 rounded-md p-3" v-bind="field">
          <div class="text-white mt-2 text-sm border-2 border-red-500 p-1" v-if="errorMessage">{{ errorMessage }}</div>
        </Field>
        <button class="p-2 bg-violet-500 rounded-md text-white w-20 mt-3 hover:bg-violet-600 duration-300">提交</button>
      </Form>
-->