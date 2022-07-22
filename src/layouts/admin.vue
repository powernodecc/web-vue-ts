<script setup lang="ts">
  import Menu from "@/layouts/admin/Menu.vue"
  import HistoryLink from "@/layouts/admin/HistoryLink.vue";
  import menuService from "@/composables/useMenu";
  import Navbar from "@/layouts/admin/Navbar.vue";

  const route = useRoute()

  watch(route, () => {
    menuService.addHistoryMenu(route)
  }, {immediate: true})
</script>

<template>
  <div class="h-screen w-screen grid grid-cols-[auto_1fr] overflow-x-hidden">
    <Menu/>
    <div class="bg-gray-100 grid-rows-[auto_1fr]">
      <div>
        <Navbar/>
        <HistoryLink/>
      </div>
      <div class="p-5 relative h-screen overflow-y-auto">
        <router-view #default="{Component}">
          <Transition appear class="animate__animated" enter-active-class="animate__fadeInRight"
                      leave-active-class="animate__fadeOutLeft">
            <component :is="Component" class="absolute right-5 left-5"/>
          </Transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .animate__fadeInRight {
    animation-duration: 1s;
  }

  .animate__fadeOutRight {
    animation-duration: 1s;
  }
</style>