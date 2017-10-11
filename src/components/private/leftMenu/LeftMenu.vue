<template>
  <div class="leftMenu">
    <div class="acountData clearfix">
      <div class="acountPic">
        <img src="../../../../static/img/counterCenter/acountPic.jpg" />
      </div>
      <div class="acountMsg clearfix">
        <p class="mechanism">鉴定中心</p>
        <p class="acountName">罗宾逊</p>
        <star-evaluate action="showData" evalType="simple" maxScore="10" evalScore="5"></star-evaluate>
      </div>
    </div>

    <hr>

    <div class="achievement clearfix">
      <div class="achieveHeader">
        <i class="glyphicon glyphicon-list-alt"></i>
        <h3>个人成就</h3>
      </div>
      <table class="table table-bordered table-striped marBtm0">  
        <tbody>  
          <tr><td>累计鉴定</td><td>累计交易意向</td></tr>  
          <tr><td>23</td><td>13</td></tr>
          <tr><td>评估订单成交</td><td>鉴定订单成交</td></tr>  
          <tr><td>8</td><td>2</td></tr>    
        </tbody>  
      </table>  
    </div>

    <hr>

    <ul id="main-nav" class="nav nav-tabs nav-stacked">
      <li class="leftMenuMarRgt" :class="{active: isActive == 0}" @click="isActive = 0">
        <router-link to="/">
          <i class="glyphicon glyphicon-user"></i>
          个人主页   
        </router-link>
      </li>
      <li :class="{active: isActive == 1}" @click="isActive = 1">
        <router-link to="/waitedLists">
          <i class="glyphicon glyphicon-time"></i>
          全部待抢
        </router-link>
      </li>
      <li class="leftMenuMarRgt" :class="{active: isActive == 2}" @click="isActive = 2">
        <router-link to="/grabbedOrder">
          <i class="glyphicon glyphicon-check"></i>
          已抢订单
        </router-link>
      </li>
      <li :class="{active: isActive == 3}" @click="isActive = 3">
        <router-link to="/waitedLists">
          <i class="glyphicon glyphicon-edit"></i>
          已评估
        </router-link>
      </li>
      <li :class="{active: isActive == 4}" @click="isActive = 4">
        <router-link to="/waitedLists">
          <i class="glyphicon glyphicon-time"></i>
          订单信息
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftMenu',
  data: function(){
    return {
      isActive: 0,
      score: '1.5'
    }
  }
}
</script>

<style scoped>
  @import './leftMenu.css'
</style>
