<script setup lang="ts">
  import menuService from "@/composables/useMenu";
  import IMenu from "~/menu";

  const route = useRoute()
  const menus: IMenu[] = menuService.history.value
</script>

<template>
  <div class="p-5 flex gap-3 shadow-sm">
    <div
        class="flex gap-2 items-center px-3 py-2 bg-white rounded-sm ring-1 ring-gray-200 text-sm duration-300 hover:bg-violet-700 hover:text-white"
        v-for="(history,index) of menus" :key="index"
        :class="{'bg-violet-700 text-white':route.name === history.route}">
      <router-link class="px-2 cursor-pointer" :to="{name:history.route}">{{ history.title }}</router-link>
      <i class="fa-solid fa-delete-left cursor-pointer hover:text-red-300"
         @click="menuService.removeHistoryMenu(history)"></i>
    </div>
  </div>
</template>

<style>

</style>