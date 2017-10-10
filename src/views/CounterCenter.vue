<template>
  <div class="counterCenter">
    <icon-title classNames="glyphicon glyphicon-user" text="个人主页"></icon-title>

    <div class="tesksBox">
    	<icon-title2 classNames="glyphicon glyphicon-time" text="抢单专区"></icon-title2>
	    <div class="tesks clearfix">
	    	<a class="btn-warning">
	    		<div class="hasNewList"></div>
	    		<span>6</span>
	    		<p>全部待抢</p>
	    	</a>
	    	<a class="btn-warning">
	    		<span>2</span>
	    		<p>已抢订单</p>
	    	</a>
	    	<a class="btn-warning">
	    		<span>1</span>
	    		<p>已评估</p>
	    	</a>
	    </div>
    </div>

    <div class="orders">
    	<icon-title2 classNames="glyphicon glyphicon-list-alt" text="订单信息"></icon-title2>
    	<div class="ordersBtm clearfix">
    		<a class="btn-success marginBtm">已预约到店订单</a>
    		<a class="btn-success marginBtm">已选择邮寄订单</a>
    		<a class="btn-success">鉴定完成订单</a>
    		<a class="btn-success">代客下单</a>
    	</div>
    </div>

  </div>
</template>

<script src="../js/views/counterCenter.js"></script>

<style scoped>
	@import '../css/views/counterCenter.css'
</style>
