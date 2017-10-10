import MdCommonHeader from './CommonHeader.vue'

const CommonHeader = {
	install: function(Vue){
		Vue.component('common-header', MdCommonHeader)
	}
}
export default CommonHeader