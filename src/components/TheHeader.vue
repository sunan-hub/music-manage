<template>
  <div class="header">
    <!-- 折叠图片 -->
    <div class="collapse-btn">
      <i class="el-icon-headset"></i>
    </div>
    <div class="logo">清香音乐 | 后台管理</div>
    <div class="header-right">
      <el-menu
        class="sidebar-el-menu"
        :default-active="onRoutes"
        :collapse="collapse"
        background-color="transparent"
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
      </el-menu>
      <el-popconfirm
        title="是否确定退出登录？"
        @confirm="confirm"
      >
        <el-button slot="reference"><i class="el-icon-s-operation"></i></el-button>
      </el-popconfirm>
      <!-- <el-dropdown class="user-name" trigger="click" @command="handleCommand">
        <i class="el-icon-s-operation"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
    </div>
  </div>
</template>

<script>
import bus from '../assets/js/bus'
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-s-data',
          index: 'Info',
          title: '系统首页'
        },
        {
          icon: 'el-icon-user-solid',
          index: 'Consumer',
          title: '用户管理'
        },
        {
          icon: 'el-icon-service',
          index: 'Singer',
          title: '歌手管理'
        },
        {
          icon: 'el-icon-document',
          index: 'SongList',
          title: '歌单管理'
        }
      ],
      fullscreen: false
    }
  },
  computed: {
    userName() {
      return localStorage.getItem('userName')
    },
    onRoutes() {
      return this.$route.path.replace('/', '')
    }
  },
  created() {
    // 通过Bus进行组件间的通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg
    })
  },
  methods: {
    confirm() {
      console.log('11')
      localStorage.removeItem('userName')
      this.$router.push('/')
      this.$message({
        message: '退出成功',
        type: 'success'
      });
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  background-color: #058a41;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #ffffff;
}

.el-menu, .el-menu-item {
  height: 100%;
  line-height: 70px;
  font-size: 20px;
}

.el-menu .el-menu-item:hover {
  background: rgb(10, 184, 77) !important;
  color: #fff !important;
}

.el-popover__reference {
  background-color: transparent;
  border: none;
}

.el-button--primary {
  background-color: teal !important;
}
/* .el-dropdown-menu {
  background-color: green;
  border: none;
}

.el-dropdown-menu__item {
  color: rgb(51, 231, 27) !important;
}

.popper__arrow::after {
  border-color: green !important;
} */

i {
  color: #68bda3;
}

.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}

.header .logo {
  float: left;
  line-height: 70px;
}

.header-right {
  float: right;
  padding-right: 50px;
  display: flex;
  height: 70px;
  align-items: center;
}

.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}

.user-avator {
  margin-left: 20px;
}

.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.el-icon-s-operation {
  font-size: 30px;
  color: aquamarine;
}

.user-name {
  margin-left: 10px;
}
</style>
