import Vue from 'vue'
import Router from 'vue-router'
import tuijian from '@/components/tuijian/tuijian'
import guanzhu from '@/components/guanzhu/guanzhu'
import faxian from '@/components/faxian/faxian'
import bi from '@/components/bi/bi'
import xiangqing from '@/components/tuijian/xiangqing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tuijian',
      component: tuijian
    },
     {
      path: '/tuijian',
      component: tuijian
    },
     {
      path: '/guanzhu',
      name: 'guanzhu',
      component: guanzhu
    },
     {
      path: '/faxian',
      name: 'faxian',
      component: faxian
    },
    {
      path: '/bi',
      name: 'bi',
      component: bi
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    }
  ]
})
