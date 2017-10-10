import Vue from 'vue'
import Router from 'vue-router'
import CounterCenter from '@/views/CounterCenter'
import AllWaitedLists from '@/views/AllWaitedLists'
import WaitedListDetails from '@/views/WaitedListDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: CounterCenter
    },
    {
    	path: '/waitedLists',
    	component: AllWaitedLists
    },
    {
    	name: 'waitedListDetails',
    	path: '/waitedListDetails',
    	component: WaitedListDetails
    }
  ]
})
