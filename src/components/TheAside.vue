<template>
  <div class="sidebar">
    <!-- <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#0d7204"
      text-color="#68bda3"
      active-text-color="#00ff37"
      router
      mode="horizontal"
    >
      <template v-for="item in items">
        <template>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            {{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu> -->
  </div>
</template>

<script>
import bus from '../assets/js/bus'
export default {
  data() {
    return {
      // collapse: false,
      // items: [
      //   {
      //     icon: 'el-icon-s-data',
      //     index: 'Info',
      //     title: '系统首页'
      //   },
      //   {
      //     icon: 'el-icon-user-solid',
      //     index: 'Users',
      //     title: '用户管理'
      //   },
      //   {
      //     icon: 'el-icon-service',
      //     index: 'Singer',
      //     title: '歌手管理'
      //   },
      //   {
      //     icon: 'el-icon-document',
      //     index: 'SongList',
      //     title: '歌单管理'
      //   }
      // ]
    }
  },
  // computed: {
  //   onRoutes() {
  //     return this.$route.path.replace('/', '')
  //   }
  // },
  // created() {
  //   // 通过Bus进行组件间的通信，来折叠侧边栏
  //   bus.$on('collapse', msg => {
  //     this.collapse = msg
  //   })
  // }
}
</script>

<style scoped>
/* .sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  background-color: #0d7204;
  overflow-y: scroll;
} */

/* .sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 1500px;
}

.sidebar > ul {
  height: 100%;
}

i {
  color: #68bda3;
} */
</style>
