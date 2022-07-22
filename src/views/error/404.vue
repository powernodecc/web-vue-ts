<script setup lang="ts">
  import Error from "@/components/error/Error.vue"
  import ErrorPage from "@/components/error";

  const pageInfo: ErrorPage = {
    statusCode: '404',
    message: '您访问的页面不存在',
    area: '中国 上海',
    temperature: '33',
    feelsLike: '30'
  }
</script>

<template>
  <Error :page-info="pageInfo"/>
</template>

<style lang="scss">

</style>