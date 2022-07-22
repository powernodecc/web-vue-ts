<script setup lang="ts">

  import Error from "@/components/error/Error.vue"
  import ErrorPage from "@/components/error";

  const pageInfo: ErrorPage = {
    statusCode: '500',
    message: 'Internal Server Error',
    area: 'Armenia Yerevan',
    temperature: '13',
    feelsLike: '10'
  }
</script>

<template>
  <Error :page-info="pageInfo"/>
</template>

<style>

</style>