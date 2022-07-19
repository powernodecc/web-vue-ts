<script setup lang="ts">

</script>

<template>
  <div class="p-5 flex gap-3">
    <div class="flex gap-4 items-center p-2 bg-white rounded-sm ring-1 ring-gray-200 text-2xs duration-300 hover:bg-violet-700 hover:text-white" v-for="n of 6">
      <span class="px-2 cursor-pointer ">主页</span>
      <i class="fa-solid fa-delete-left cursor-pointer hover:text-red-300"></i>
    </div>
  </div>
</template>

<style>

</style>