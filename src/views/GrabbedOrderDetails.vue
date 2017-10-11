<template>
  <div class="grabbedOrderDetails">
    <icon-title classNames="glyphicon glyphicon-time" text="已抢订单"></icon-title>

    <div class="goodsInfos">
      <div class="title">
        箱包详情
      </div>

      <div class="goodsPics">
        <!-- swiper灯箱效果 -->
        <swiper-light-box v-if="isShowLightBox" @closeLightBox="hideBox" :picArr="swiperImgs" :index="index"></swiper-light-box>

        <swiper :options="swiperOption" ref="goodsPicsSwiper">
          <swiper-slide v-for="(url, index) in swiperImgs" 
                        :index='index' 
                        @showLightBox='showBox'>
            <img :src="url" />
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td colspan="4" class="baseInfo">基本信息</td>
          </tr>
          <tr>
            <td width="20%">编号</td>
            <td width="30%">2017090912333301</td>
            <td width="20%" class="cRed">评估用时</td>
            <td width="30%" class="cRed">9:23</td>
          </tr>
          <tr>
            <td width="20%">提交时间</td>
            <td width="30%">2017.9.9--12:33:33</td>
            <td width="20%">用户信息</td>
            <td width="30%"><router-link class="history" :to="{name: 'historicalValuation', params: {goodsId: goodsNum}}">历史估价记录</router-link></td>
          </tr>
          <tr>
            <td colspan="4" class="baseInfo">商品信息</td>
          </tr>
          <tr>
            <td width="20%">品类</td>
            <td width="30%">箱包</td>
            <td width="20%">品牌</td>
            <td width="30%">Louis Vuitton/路易威登</td>
          </tr>
          <tr>
            <td width="20%">使用情况</td>
            <td width="30%">95成新</td>
            <td width="20%">尺寸</td>
            <td width="30%">35cm</td>
          </tr>
          <tr>
            <td width="20%">购买时间</td>
            <td width="30%">2015年</td>
            <td width="20%">购买价格</td>
            <td width="30%">10000元</td>
          </tr>
          <tr>
            <td width="20%">附件</td>
            <td colspan="3">保卡、证书、防尘袋、肩带、收据或发票、五金配件、其他附件</td>
          </tr>
        </tbody>
      </table>
      <div class="valuationResult clearfix">
      	<div><button type="button" class="btn btn-success">评估报价</button></div>
      	<div><button type="button" class="btn btn-danger">无法估价</button></div>
      	<div class="noBorderRgt relative">
      		<transition name="slideToggle">
	      		<div class="backOptions" v-if="isBack">
		      		<a>退回抢单池</a>
		      		<a>交给鉴定中心</a>
		      	</div>
	      	</transition>
      		<button type="button" class="btn btn-warning" @click="showBackBox">退回</button>
      	</div>
      </div>
    </div>    


  </div>
</template>

<script src="../js/views/grabbedOrderDetails.js"></script>

<style scoped>
	@import '../css/views/grabbedOrderDetails.css'
</style>
