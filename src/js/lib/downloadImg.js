// 使用es6 import语法添加
export let myBrowser = function(){ 
  //取得浏览器的userAgent字符串 
  var userAgent = navigator.userAgent; 
  //判断是否Opera浏览器 
  var isOpera = userAgent.indexOf("Opera") > -1; 
  if (isOpera) { return "Opera" }; 
  //判断是否Firefox浏览器
  if (userAgent.indexOf("Firefox") > -1) { return "FF"; } 
  //判断是否Chrome浏览器
  if (userAgent.indexOf("Chrome") > -1){ return "Chrome"; } 
  //判断是否Safari浏览器
  if (userAgent.indexOf("Safari") > -1) { return "Safari"; } 
  //判断是否IE浏览器 
  if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) { return "IE"; }; 
  //判断是否Edge浏览器 
  if (userAgent.indexOf("Trident") > -1) { return "Edge"; } 
}
      
export let SaveAs5 = function(imgURL) { 
  var oPop = window.open(imgURL,"","width=1, height=1, top=5000, left=5000"); 
  for(; oPop.document.readyState != "complete"; ) { 
    if (oPop.document.readyState == "complete"){
      break;
    } 
  } 
  oPop.document.execCommand("SaveAs"); 
  oPop.close(); 
} 

export let oDownLoad = function(obj, url) { 
  myBrowser(); 
  if (myBrowser()==="IE" || myBrowser()==="Edge"){ 
    //IE 
    obj.href="#"; 
    var oImg=document.createElement("img");
    oImg.src=url; 
    oImg.id="downImg"; 
    var odown=document.getElementById("down"); 
    odown.appendChild(oImg); 
    SaveAs5(document.getElementById('downImg').src) 
  }else{
   //!IE 
   obj.href=url; 
   obj.download=""; 
  } 
}


// 使用<script></script>标签添加在<body></body>前面
// function myBrowser(){ 
//   //取得浏览器的userAgent字符串 
//   var userAgent = navigator.userAgent; 
//   //判断是否Opera浏览器 
//   var isOpera = userAgent.indexOf("Opera") > -1; 
//   if (isOpera) { return "Opera" }; 
//   //判断是否Firefox浏览器
//   if (userAgent.indexOf("Firefox") > -1) { return "FF"; } 
//   //判断是否Chrome浏览器
//   if (userAgent.indexOf("Chrome") > -1){ return "Chrome"; } 
//   //判断是否Safari浏览器
//   if (userAgent.indexOf("Safari") > -1) { return "Safari"; } 
//   //判断是否IE浏览器 
//   if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) { return "IE"; }; 
//   //判断是否Edge浏览器 
//   if (userAgent.indexOf("Trident") > -1) { return "Edge"; } 
// }
      
// function SaveAs5(imgURL) { 
//   var oPop = window.open(imgURL,"","width=1, height=1, top=5000, left=5000"); 
//   for(; oPop.document.readyState != "complete"; ) { 
//     if (oPop.document.readyState == "complete"){
//       break;
//     } 
//   } 
//   oPop.document.execCommand("SaveAs"); 
//   oPop.close(); 
// } 

// function oDownLoad(obj, url) { 
//   myBrowser(); 
//   if (myBrowser()==="IE" || myBrowser()==="Edge"){ 
//     //IE 
//     obj.href="#"; 
//     var oImg=document.createElement("img");
//     oImg.src=url; 
//     oImg.id="downImg"; 
//     var odown=document.getElementById("down"); 
//     odown.appendChild(oImg); 
//     SaveAs5(document.getElementById('downImg').src) 
//   }else{
//    //!IE 
//    obj.href=url; 
//    obj.download=""; 
//   } 
// }