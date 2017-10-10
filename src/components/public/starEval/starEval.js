import MdStarEval from './StarEval.vue'

const StarEval = {
	install: function(Vue){
		Vue.component('star-evaluate', MdStarEval)
	}
}
export default StarEval