<script setup lang="ts">

  import ErrorPage from "@/components/error/index";

  const props = defineProps<{
    pageInfo: ErrorPage
  }>()
</script>

<template>
    <div class="h-screen bg-violet-200">
    <div class="flex items-center flex-col gap-6 translate-y-32 text-violet-600">
      <h2 class="text-7xl">{{ props.pageInfo.statusCode }}</h2>
      <div class="text-4xl text-gray-600">{{ props.pageInfo.message }}</div>
      <div class="w-60 h-60 bg-white rounded-xl mt-2 p-5 grid">
        <div class="text-center">
          <div class="text-gray-700">{{ props.pageInfo.area }}</div>
        </div>
        <div class="flex justify-between text-5xl items-center mb-5">
          <i class="fa-solid fa-umbrella-beach text-yellow-500"></i>
          <div class="text-black">
            <div class="mb-2">{{ props.pageInfo.temperature }}℃</div>
            <div class="text-xs text-gray-600 text-center">feels like {{ props.pageInfo.feelsLike }}℃</div>
          </div>
        </div>
        <div class="border-t-2 flex justify-end items-center">
          <div class="cursor-pointer hover:text-blue-800">回到首页</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>