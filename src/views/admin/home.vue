<script setup lang="ts">
  import Menu from "@/layouts/admin/Menu.vue"
  import Breadcrumb from "@/layouts/admin/Breadcrumb.vue";
  import HistoryLink from "@/layouts/admin/HistoryLink.vue";
</script>

<template>
  <div class="flex w-screen h-screen bg-gray-50">
    <Menu/>
    <div class="w-full">
      <Breadcrumb/>
      <HistoryLink/>
    </div>
  </div>
</template>

<style>

</style>