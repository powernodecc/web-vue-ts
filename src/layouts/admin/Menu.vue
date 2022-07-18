<script setup lang="ts">
  interface Menu {
    title?: string
    icon?: string
    isClick?: boolean
  }

  interface IMenu extends Menu {
    children?: Menu[]
  }

  const menus = ref<IMenu[]>([
    {
      title: 'dashboard',
      icon: 'fa-solid fa-gauge',
      children: [
        {
          title: '主页'
        }
      ]
    },
    {
      title: '编辑器',
      icon: 'fa-solid fa-c',
      children: [
        {
          title: 'markdown'
        },
        {
          title: '富文本编辑器'
        }
      ]
    },
    {
      title: '错误页面',
      icon: 'fa-solid fa-c',
      children: [
        {
          title: '404页面'
        },
        {
          title: '500页面'
        }
      ]
    }
  ])

  const resetMenu = (menu: IMenu) => {
    menus.value.forEach(item => {
      item.isClick = false
      item.children?.forEach(item => {
        item.isClick = false
      })
    })
  }

  const toggleMenu = (menu: IMenu, _menu?: Menu) => {
    resetMenu(menu);
    menu.isClick = true
    if (_menu !== undefined) {
      _menu.isClick = true
    }
  }

</script>

<template>
  <div class="w-60 bg-gray-700 px-5">
    <div class="mt-5 flex flex-row">
      <i class="fa-brands fa-android text-3xl text-violet-300"></i>
      <h2 class="text-xl text-white ml-2">晚八点直播</h2>
    </div>

    <div class="mt-5">
      <dl class="text-gray-300 relative text-2xs mt-6" v-for="(menu,index) of menus" :key="index">
        <dt class="flex justify-between items-center cursor-pointer mb-3" @click="toggleMenu(menu)">
          <section>
            <i :class="menu.icon"></i>
            <span class="ml-3">{{ menu.title }}</span>
          </section>
          <section>
            <i class="fa-solid fa-angle-down"></i>
          </section>
        </dt>
        <dd v-for="(childrenMenu,index) of menu.children" v-show="menu.isClick"
            @click="toggleMenu(menu,childrenMenu)">
          <div :class="{'bg-violet-700' : childrenMenu.isClick}"
               class="mt-2 p-3 rounded-md cursor-pointer ml-1 bg-gray-700 duration-200 hover:bg-violet-700">
            {{ childrenMenu.title }}
          </div>
        </dd>
      </dl>

    </div>
  </div>
</template>

<style>

</style>