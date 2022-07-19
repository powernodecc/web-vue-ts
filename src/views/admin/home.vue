<script setup lang="ts">
  import echarts from "@/views/admin/echarts";
  import {e1, e2} from "@/views/admin/e";

  type Card = {
    title: string
    icon: string
  }

  const cardList = ref<Card[]>([
    {
      title: '下载数',
      icon: 'fa-brands fa-canadian-maple-leaf text-green-500',
    },
    {
      title: '观看数',
      icon: 'fa-solid fa-carrot text-red-500'
    },
    {
      title: '评论数',
      icon: 'fa-solid fa-desktop text-pink-500'
    },
    {
      title: '订单数',
      icon: 'fa-solid fa-database text-blue-500'
    }
  ])

  nextTick(() => {
    const _e1 = echarts.init(document.getElementById("_e1") as HTMLElement)
    const _e2 = echarts.init(document.getElementById("_e2") as HTMLElement)
    _e1?.setOption(e1)
    _e2?.setOption(e2)
  })

</script>

<template>
  <div class="grid grid-flow-row gap-5">
    <div class="grid grid-flow-col gap-5">
      <section
          class="card" v-for="(card,index) of cardList" :key="index">
        <div class="flex justify-between">
          <div class="text-xl text-gray-800">{{ card.title }}</div>
          <div class="bg-red-400 text-sm text-white rounded-md px-3.5 py-1">月</div>
        </div>
        <div class="border-b-2"></div>
        <div class="flex justify-between py-3 my-5">
          <div class="text-3xl flex justify-center items-center">10000</div>
          <i :class="card.icon" class="text-6xl"></i>
        </div>
        <div class="flex justify-between">
          <div class="text-lg text-gray-700">总评论数</div>
          <div class="text-lg text-gray-600">20000人</div>
        </div>
      </section>
    </div>

    <el-container>
      <div class="grid grid-cols-2 gap-5 w-full">
        <div class="bg-white p-5 rounded-md overflow-hidden">
          <div class="border-b-2 pb-3">用户统计</div>
          <div id="_e1" class="h-72 w-full flex justify-center items-center mt-2"></div>
        </div>
        <div class="bg-white p-5 rounded-md overflow-hidden">
          <div class="border-b-2 pb-3">用户统计</div>
          <div id="_e2" class="h-72 w-full flex justify-center items-center mt-2"></div>
        </div>
      </div>
    </el-container>
  </div>
</template>

<style lang="scss">
  .card {
    @apply flex flex-col gap-3 border-red-200  p-5 cursor-pointer hover:shadow duration-300 shadow-gray-50 bg-white rounded-md;
  }
</style>