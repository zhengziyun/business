import Vue from 'vue'
import Router from 'vue-router'
import CounterCenter from '@/views/CounterCenter'
import AllWaitedLists from '@/views/AllWaitedLists'
import WaitedListDetails from '@/views/WaitedListDetails'
import HistoricalValuation from '@/views/HistoricalValuation'
import GrabbedOrder from '@/views/GrabbedOrder'
import GrabbedOrderDetails from '@/views/GrabbedOrderDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	name: '/',
      path: '/',
      component: CounterCenter
    },
    {
    	name: 'waitedLists',
    	path: '/waitedLists',
    	component: AllWaitedLists
    },
    {
    	name: 'waitedListDetails',
    	path: '/waitedListDetails',
    	component: WaitedListDetails
    },
    {
    	name: 'historicalValuation',
      path: '/historicalValuation',
      component: HistoricalValuation
    },
    {
    	name: 'grabbedOrder',
    	path: '/grabbedOrder',
    	component: GrabbedOrder
    },
    {
    	name: 'grabbedOrderDetails',
    	path: '/grabbedOrderDetails',
    	component: GrabbedOrderDetails
    }
  ]
})
