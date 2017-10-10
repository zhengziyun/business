<template>
  <div class="iconTitle2">
      <span>
        <i :class="classNames"></i>
          {{text}}
      </span>
  </div>
</template>

<script>
  export default {
    name: 'iconTitle2',
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
  .iconTitle2{
    width: 100%;
    height: 42px;
    background: #E9E9E9;
    background: -moz-linear-gradient(top, #FAFAFA 0%, #E9E9E9 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FAFAFA), color-stop(100%,#E9E9E9));
    background: -webkit-linear-gradient(top, #FAFAFA 0%,#E9E9E9 100%);
    background: -o-linear-gradient(top, #FAFAFA 0%,#E9E9E9 100%);
    background: -ms-linear-gradient(top, #FAFAFA 0%,#E9E9E9 100%);
    background: linear-gradient(top, #FAFAFA 0%,#E9E9E9 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FAFAFA', endColorstr='#E9E9E9');
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FAFAFA', endColorstr='#E9E9E9')";
    border: 1px solid #d5d5d5;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    overflow: hidden;
  }
  .iconTitle2 span{
    display: block;
    line-height: 14px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    color: #555;
    padding: 12px 10px;
  }
  .iconTitle2 span i{
    margin-right: 5px;
  }
</style>
