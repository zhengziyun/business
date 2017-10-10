export default {
  name: 'starEval',
  props: {
    action: {
      type: String,
      // addData表示进行评价，showData表示展示结果
      default: 'addData'
    },
    evalType: {
      type: String,
      // simple：代表分5份，complex代表分10份
      default: 'simple'
    },
    maxScore: {
      type: String,
      default: '5'
    },
    evalScore: {
      type: String,
      default: '0'
    }
  },
  data: function(){
    return {
      // 是否启用hover手型
      isPointer: false,
      // 星评图片数组
      aPicUrls: null,
      // 已确定星评图片的数组
      aPicOrigin: null,
      // 行评最终得分
      getScore: 0,
      // 是否启用星星mousemove事件
      allowSelectScore: true
    }
  },
  computed: {
   
  },
  methods: {
    // 获取非行间样式
    getStyle: function(obj, css){
      if(obj.currentStyle){
        return parseFloat(obj.currentStyle[css]);
      }else{
        return parseFloat(getComputedStyle(obj,null)[css]);
      }
    },
    // 高亮星星函数
    lightStar: function(num, type){
      this.aPicUrls = [
        './static/pubTemplateImg/starEval/star-off.png' 
        ,'./static/pubTemplateImg/starEval/star-off.png'  
        ,'./static/pubTemplateImg/starEval/star-off.png' 
        ,'./static/pubTemplateImg/starEval/star-off.png' 
        ,'./static/pubTemplateImg/starEval/star-off.png' 
      ];

      if(type === "notFloat"){
        for(let i=0; i<=num; i++){
          this.aPicUrls.splice(i, 1, './static/pubTemplateImg/starEval/star-on.png');
        }
      }else if(type === "isFloat"){
        var intNum = Math.floor(num);
        var lastNum = intNum + 1;
        for(let i=0; i<=num; i++){
          this.aPicUrls.splice(i, 1, './static/pubTemplateImg/starEval/star-on.png');
        }
        this.aPicUrls.splice(lastNum, 1, './static/pubTemplateImg/starEval/star-half.png');
      }
    },
    // 显示评分
    showScore: function(){
      // 初始化星评显示
      this.aPicUrls = [
        './static/pubTemplateImg/starEval/star-off.png' 
        ,'./static/pubTemplateImg/starEval/star-off.png'  
        ,'./static/pubTemplateImg/starEval/star-off.png' 
        ,'./static/pubTemplateImg/starEval/star-off.png' 
        ,'./static/pubTemplateImg/starEval/star-off.png' 
      ];

      // 判断评价类型，获取评分
      let type = this.evalType;
      let score = Number(this.evalScore);
      let maxScore = Number(this.maxScore);
      let ruleScore = 0;
      if(score < 0){
        score = 0;
      }else if(score > maxScore){
        score = maxScore;
      }

      // 5份简单星评
      if(type === "simple"){
        ruleScore = maxScore/5;
        if(score === 0){

        }else if(score > 0 && score <= ruleScore){
          this.lightStar(0, 'notFloat');
        }else if(score > ruleScore && score <= ruleScore*2){
          this.lightStar(1, 'notFloat');
        }else if(score > ruleScore*2 && score <= ruleScore*3){
          this.lightStar(2, 'notFloat');
        }else if(score > ruleScore*3 && score <= ruleScore*4){
          this.lightStar(3, 'notFloat');
        }else if(score > ruleScore*4 && score <= ruleScore*5){
          this.lightStar(4, 'notFloat');
        }
      }
      // 10份复杂星评
      else if(type === "complex"){ 
        ruleScore = maxScore/10;
        if(score === 0){

        }else if(score > 0 && score <= ruleScore){
          this.lightStar(-0.5, 'isFloat');
        }else if(score > ruleScore && score <= ruleScore*2){
          this.lightStar(0, 'notFloat');
        }else if(score > ruleScore*2 && score <= ruleScore*3){
          this.lightStar(0.5, 'isFloat');
        }else if(score > ruleScore*3 && score <= ruleScore*4){
          this.lightStar(1, 'notFloat');
        }else if(score > ruleScore*4 && score <= ruleScore*5){
          this.lightStar(1.5, 'isFloat');
        }else if(score > ruleScore*5 && score <= ruleScore*6){
          this.lightStar(2, 'notFloat');
        }else if(score > ruleScore*6 && score <= ruleScore*7){
          this.lightStar(2.5, 'isFloat');
        }else if(score > ruleScore*7 && score <= ruleScore*8){
          this.lightStar(3, 'notFloat');
        }else if(score > ruleScore*8 && score <= ruleScore*9){
          this.lightStar(3.5, 'isFloat');
        }else if(score > ruleScore*9 && score <= ruleScore*10){
          this.lightStar(4, 'notFloat');
        }
      }
    },
    // 进行评分
    selectScore: function(index, ev){
      if(this.action === "showData"){
        return;
      }else if(this.action === "addData"){
        if(this.allowSelectScore === true){
          // 判断评价类型，获取评分
          let type = this.evalType;
          // 5份简单星评
          if(type === "simple"){
            this.lightStar(index, 'notFloat');
          }else if(type === "complex"){
            var ev = ev || event;
            var nLeft = ev.offsetX;
            var halfWidth = this.getStyle(ev.target, 'width')/2;
            if(nLeft <= halfWidth){
              this.lightStar((index-0.5), 'isFloat');
            }else if(nLeft > halfWidth && nLeft <= halfWidth*2){
              this.lightStar(index, 'notFloat');
            }
          }
        }else if(this.allowSelectScore === false){
          return;
        }
      }
    },
    // 鼠标移出还原已确定评分
    replayScore: function(){
      if(this.action === "showData"){
        return;
      }else if(this.action === "addData"){
        this.aPicUrls = this.aPicOrigin;
        this.allowSelectScore = true;
      }
    },
    // 点击进行打分
    confirmScore: function(index){
      this.allowSelectScore = false;
      if(this.action === "showData"){
        return;
      }else if(this.action === "addData"){
        // 判断评价类型，获取评分
        let type = this.evalType;
        let maxScore = Number(this.maxScore);
        let ruleScore = maxScore/5;
        // 5份简单星评
        if(type === "simple"){
          this.aPicOrigin = this.aPicUrls;
          this.getScore = ruleScore * (index + 1);
        }else if(type === "complex"){
          this.aPicOrigin = this.aPicUrls;
          if(this.aPicOrigin[index].indexOf('star-half') >= 0){
            this.getScore = ruleScore * (index + 0.5);
          }else{
            this.getScore = ruleScore * (index + 1);
          }
        }
      }
    },
    // 打分入口函数
    addScore: function(){
      // 判断需不需要显示手型
      this.isPointer = true;

      // 初始化星评显示
      this.aPicUrls = [
        './static/pubTemplateImg/starEval/star-off.png' 
        ,'./static/pubTemplateImg/starEval/star-off.png'  
        ,'./static/pubTemplateImg/starEval/star-off.png' 
        ,'./static/pubTemplateImg/starEval/star-off.png' 
        ,'./static/pubTemplateImg/starEval/star-off.png' 
      ];

      this.aPicOrigin = this.aPicUrls;
    }
  },
  mounted: function(){
    if(this.action === "addData"){
      this.addScore();
    }else if(this.action === "showData"){
      this.showScore();
    }
  }
}