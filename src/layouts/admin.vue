<script setup lang="ts">
  import Menu from "@/layouts/admin/Menu.vue"
  import HistoryLink from "@/layouts/admin/HistoryLink.vue";
  import Breadcrumb from "@/layouts/admin/Breadcrumb.vue";
</script>

<template>
  <div class="h-screen w-screen grid grid-cols-[auto_1fr] overflow-x-hidden">
    <Menu/>
    <div class="bg-gray-100 grid-rows-[auto_1fr]">
      <div>
        <Breadcrumb/>
        <HistoryLink/>
      </div>
      <div class="px-5 py-2">
        <router-view #default="{Component}">
          <component :is="Component"/>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style>

</style>