<template>
  <div class="allWaitedLists">

    <icon-title classNames="glyphicon glyphicon-time" text="全部待抢"></icon-title>

    <router-link :to="{name: 'waitedListDetails', params: {goodsId: 1}}" class="waitedList">
    	<div class="waitedListNum panel-title"> 编号：2017090912333301</div>
    	<div class="waitedListInfo">
    		<div class="orderTime">2017-09-09
    			<span>12:33:33</span>
    		</div>
    		<div class="goodsInfo clearfix">
    			<div class="pic">
    				<img src="../../static/img/allWaitedLists/goods.png" />
    			</div>
    			<div class="info">
    				<h3>类别-品牌</h3>
    				<p>95新</p>
    				<p>2015年购买</p>
    			</div>
    		</div>
        <div class="restTime">抢单剩余：9:23</div>
        <div class="btn btn-warning grabOrderBtn" @click.prevent="grabOrder">抢单</div>
    	</div>
    </router-link>

    <router-link :to="{name: 'waitedListDetails', params: {goodsId: 2}}" class="waitedList">
      <div class="waitedListNum panel-title"> 编号：2017090912333301</div>
      <div class="waitedListInfo">
        <div class="orderTime">2017-09-09
          <span>12:33:33</span>
        </div>
        <div class="goodsInfo clearfix">
          <div class="pic">
            <img src="../../static/img/allWaitedLists/goods.png" />
          </div>
          <div class="info">
            <h3>类别-品牌</h3>
            <p>95新</p>
            <p>2015年购买</p>
          </div>
        </div>
        <div class="restTime">抢单剩余：9:23</div>
        <div class="btn btn-warning grabOrderBtn">抢单</div>
      </div>
    </router-link>

    <router-link :to="{name: 'waitedListDetails', params: {goodsId: 3}}" class="waitedList">
      <div class="waitedListNum panel-title"> 编号：2017090912333301</div>
      <div class="waitedListInfo">
        <div class="orderTime">2017-09-09
          <span>12:33:33</span>
        </div>
        <div class="goodsInfo clearfix">
          <div class="pic">
            <img src="../../static/img/allWaitedLists/goods.png" />
          </div>
          <div class="info">
            <h3>类别-品牌</h3>
            <p>95新</p>
            <p>2015年购买</p>
          </div>
        </div>
        <div class="restTime">抢单剩余：9:23</div>
        <div class="btn btn-warning grabOrderBtn">抢单</div>
      </div>
    </router-link>

    <router-link :to="{name: 'waitedListDetails', params: {goodsId: 4}}" class="waitedList">
      <div class="waitedListNum panel-title"> 编号：2017090912333301</div>
      <div class="waitedListInfo">
        <div class="orderTime">2017-09-09
          <span>12:33:33</span>
        </div>
        <div class="goodsInfo clearfix">
          <div class="pic">
            <img src="../../static/img/allWaitedLists/goods.png" />
          </div>
          <div class="info">
            <h3>类别-品牌</h3>
            <p>95新</p>
            <p>2015年购买</p>
          </div>
        </div>
        <div class="restTime">抢单剩余：9:23</div>
        <div class="btn btn-warning grabOrderBtn">抢单</div>
      </div>
    </router-link>

  </div>
</template>

<script src="../js/views/allWaitedLists.js"></script>

<style scoped>
	@import '../css/views/allWaitedLists.css'
</style>
