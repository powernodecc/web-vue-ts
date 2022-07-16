<script setup lang="ts">
  import {Form, Field, defineRule} from "vee-validate";
  import {required} from "@vee-validate/rules";

  defineRule("required", required)

  const onSubmit = () => {
    console.log("validate")
  }
</script>

<template>
  <div class="relative flex justify-end">
    <div class="bg-cover h-screen w-screen absolute min-h-[720px]" style="background-image: url('/public/r1.jpg')"></div>
    <div class="absolute h-[600px] w-[500px]  bg-gray-50 rounded-2xl translate-y-[70px] -translate-x-[100px]">
      <div class="grid gap-2 ">
        <div>
          <h2 class="ml-8 mt-10 text-2xl">欢迎注册</h2>
        </div>
        <div class="p-5 grid gap-8 mt-10">
          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">用户名</span>
            <input
                class="border-violet-200 border rounded-md p-2 flex-1 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white"
                type="text">
          </div>
          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">手机号</span>
            <input
                class="border-violet-200 border rounded-md p-2 flex-1 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white"
                type="text">
          </div>
          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">
              <span>密</span>
              <span class="p-1.5"/>
              <span>码</span>
            </span>
            <input
                class="border-violet-200 border rounded-md p-2 flex-1 ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white"
                type="text">
          </div>
          <div class="flex mr-6">
            <span class="w-20 h-10 flex justify-center items-center text-gray-500 text-2xs">验证码</span>
            <input
                class="border-violet-200 border rounded-md p-2  ring-offset-2 ring-violet-600 outline-none duration-300 focus:ring-2 focus:border-white"
                type="text">
            <button
                class="p-3 ml-6 border-gray-200 border rounded-md bg-white text-xs flex-1 duration-300 hover:border-violet-500 hover:text-violet-500">
              获取验证码
            </button>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <button class="bg-violet-700 py-3 mt-8 px-10 w-[399px] text-2xs text-white rounded-2xl">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

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