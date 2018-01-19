import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import homePage from '@/page/homePage'
import musicHall from '@/page/musicHall'
export default new Router({
  routes: [
    {
    		path: '/',
    		name: 'homePage',
    		component: homePage,
    		meta: {
    			keepAlive: false, // 需要被缓存,
    			title: "首页"
    		}
    },
    {
        path: '/musicHall',
        name: 'musicHall',
        component: musicHall,
        meta: {
          title:'音乐馆'
        }
    }
  ]
})
