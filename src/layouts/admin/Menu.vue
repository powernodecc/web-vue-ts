<script setup lang="ts">
  import useMenuStore from "@/store/menuStore";
  import router from "@/router";
  import IMenu, {Menu} from "~/menu";

  const menuStore = useMenuStore()
  menuStore.init()

  const handler = (childrenMenu:Menu) => {
    // //menuStore.toggleMenu(menu,childrenMenu)
    router.push({name: childrenMenu.route})
  }
</script>

<template>
  <div class="w-64 bg-gray-800 px-5">
    <div class="mt-5 flex flex-row">
      <i class="fa-brands fa-android text-3xl text-violet-300"></i>
      <h2 class="text-xl text-white ml-2">晚八点直播</h2>
    </div>

    <div class="mt-5">
      <dl class="text-gray-300 relative text-2xs my-6 " v-for="(menu,index) of menuStore.menus" :key="index">
        <dt class="flex justify-between items-center cursor-pointer mb-3" @click="menuStore.toggleMenu(menu,undefined)">
          <section>
            <i :class="menu.icon"></i>
            <span class="ml-3">{{ menu.title }}</span>
          </section>
          <section>
            <i :class="menu.isClick ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'"></i>
          </section>
        </dt>
        <dd v-for="(childrenMenu,index) of menu.children" :key="index" v-show="menu.isClick"
            @click="handler(childrenMenu)">
          <div :class="{'bg-violet-700' : childrenMenu.isClick}"
               class="my-2 p-3 rounded-md cursor-pointer ml-1 bg-gray-700 duration-200 hover:bg-violet-700">
            {{ childrenMenu.title }}
          </div>
        </dd>
      </dl>

    </div>
  </div>
</template>

<style>

</style>