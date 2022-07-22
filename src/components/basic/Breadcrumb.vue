<script setup lang="ts">
  const route = useRoute()
</script>

<template>
  <t-breadcrumb>
    <t-breadcrumbItem :to="{name:'home'}">首页</t-breadcrumbItem>
    <t-breadcrumbItem v-for="(item,index) of route.matched" :key="index">{{ item.meta.menu.title }}</t-breadcrumbItem>
  </t-breadcrumb>

</template>

<style>

</style>