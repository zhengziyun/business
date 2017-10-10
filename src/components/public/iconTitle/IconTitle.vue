<template>
  <div class="iconTitle">
      <span>
        <i :class="classNames"></i>
          {{text}}
      </span>
  </div>
</template>

<script>
  export default {
    name: 'iconTitle',
    props: {
      classNames: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    }
  } 
</script>

<style scoped>
  .iconTitle{
    width: 100%;
    height: 46px;
    background: #3C4049;
    border-radius: 4px;
    overflow: hidden;
  }
  .iconTitle span{
    display: block;
    line-height: 16px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    padding: 14px 10px;
  }
  .iconTitle span i{
    margin-right: 5px;
  }
</style>
