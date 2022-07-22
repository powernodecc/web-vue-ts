<script setup lang="ts">

  import Error from "@/components/error/Error.vue"
  import ErrorPage from "@/components/error";

  const pageInfo: ErrorPage = {
    statusCode: '401',
    message: '未经授权',
    area: 'Romania Bucharest',
    temperature: '23',
    feelsLike: '20'
  }
</script>

<template>
  <Error :page-info="pageInfo"/>
</template>

<style>

</style>