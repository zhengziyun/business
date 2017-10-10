<template>
  <div id="app">
    <common-header></common-header>
    <div class="containerBtm">
    	<div class="container clearfix">
    		<div class="containerBtmLft">
    			<left-menu></left-menu>
    		</div>
    		<div class="containerBtmRgt">
    			<router-view></router-view>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	.containerBtm{
		width: 100%;
		height: 600px;
		padding-top: 15px;
	}
	.containerBtmLft{
		float: left;
		width: 270px;
	  margin-right: 30px;
	}
	.containerBtmRgt{
		float: left;
		width: 870px;
	}


	@media (min-width: 992px) and (max-width: 1199px) {
	  .containerBtmLft{
	    width: 240px;
	    margin-right: 20px;
	  }
	  .containerBtmRgt{
	  	width: 702px;
	  }
	}


	@media (min-width: 768px) and (max-width: 991px) {
	  .containerBtmLft{
	    width: 200px;
	    margin-right: 20px;
	  }
	  .containerBtmRgt{
	  	width: 518px;
	  }
	}


	@media (max-width: 767px) {
	  .containerBtmLft{
	    width: 100%;
	  }
	  .containerBtmRgt{
	  	width: 100%;
	  	margin: 0.4rem 0 0 0;
	  }
	}
</style>
