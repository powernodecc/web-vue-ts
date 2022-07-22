<script setup lang="ts">

  import menuService from "@/composables/useMenu";
  import IMenu from "~/menu";
  import menuStore from "@/store/menuStore";

  const route = useRoute()
  const router = useRouter()

  watch(route, () => {
    menuService.setCurrentMenu(route)
  }, {immediate: true})

  const menus: IMenu[] = menuService.menus.value

  const store = menuStore()
  store.init()
</script>

<template>
  <div class="w-64 bg-gray-800 px-5">
    <header class="mt-5 flex flex-row">
      <i class="fa-brands fa-android text-3xl text-violet-300"></i>
      <h2 class="text-xl text-white ml-2">晚八点直播</h2>
    </header>

    <main class="mt-5">
      <dl class="text-gray-300 relative text-2xs my-6 " v-for="(menu,index) of menus" :key="index">
        <dt class="flex justify-between items-center cursor-pointer mb-3" @click="menuService.toggleParentMenu(menu)">
          <section>
            <i :class="menu.icon"></i>
            <span class="ml-3">{{ menu.title }}</span>
          </section>
          <section>
            <i :class="menu.isClick ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'"></i>
          </section>
        </dt>
        <dd v-for="(childrenMenu,index) of menu.children" :key="index" v-show="menu.isClick"
            @click="router.push({name:childrenMenu.route})">
          <div :class="{'bg-violet-700' : childrenMenu.isClick}"
               class="my-2 p-3 rounded-md cursor-pointer ml-1 bg-gray-700 duration-200 hover:bg-violet-700">
            {{ childrenMenu.title }}
          </div>
        </dd>
      </dl>
    </main>
  </div>
</template>

<style>

</style>