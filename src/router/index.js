import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/Login.vue'], resolve)
    },

    {
      path: '/Home',
      component: resolve => require(['../components/Home.vue'], resolve),
      children: [
        {
          path: '/Info',
          component: resolve => require(['../pages/InfoPage.vue'], resolve)
        },
        {
          path: '/Consumer',
          component: resolve => require(['../pages/ConsumerPage.vue'], resolve)
        },
        {
          path: '/Singer',
          component: resolve => require(['../pages/SingerPage.vue'], resolve)
        },
        {
          path: '/SongList',
          component: resolve => require(['../pages/SongListPage.vue'], resolve)
        },
        {
          path: '/Song',
          component: resolve => require(['../pages/SongPage.vue'], resolve)
        },
        {
          path: '/ListSong',
          component: resolve => require(['../pages/ListSongPage.vue'], resolve)
        },
        {
          path: '/Shoucang',
          component: resolve => require(['../pages/ShoucangPage.vue'], resolve)
        },
        {
          path: '/Pinglun',
          component: resolve => require(['../pages/PinglunPage.vue'], resolve)
        }
      ]
    }
  ]
})

// 重复点击导航时，控制台出现报错 ，虽然不影响功能使用，但也不能视而不见
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
