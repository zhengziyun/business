<template>
  <div class="starEval clearfix">
      <span :class="{pointer: isPointer}" 
            v-for="(url, index) in aPicUrls" 
            @mousemove="selectScore(index)" 
            @mouseleave="replayScore"
            @click="confirmScore(index)">
        <img :src="url" />
      </span>
  </div>
</template>

<script src="./starEval_config.js"></script>

<style scoped>
  @import './starEval.css'
</style>
