import { swiper, swiperSlide, swiperLightBox } from 'vue-awesome-swiper'

export default {
  name: 'waitedListDetails',
  components: {
    swiper,
    swiperSlide,
    swiperLightBox
  },
  data () {
    return {
    	index: 0,
    	isShowLightBox: false,
      swiperOption: {
        // autoplay: 3000,
        pagination : '.swiper-pagination',
        paginationClickable: true,
        grabCursor : true,
        autoHeight: true
      },
      swiperImgs: [
      	"../../static/img/waitedListDetails/goods.jpg"
      	,"../../static/img/waitedListDetails/goods1.jpg"
      	,"../../static/img/waitedListDetails/goods2.jpg"
      	,"../../static/img/waitedListDetails/goods3.jpg"
      ]
    }
  },
  mounted: function(){

  },
  methods: {
  	showBox: function(msg){
  		this.isShowLightBox = true;
  		this.index = msg;
  	},
  	hideBox: function(){
  		this.isShowLightBox = false;
  	}
  }
}