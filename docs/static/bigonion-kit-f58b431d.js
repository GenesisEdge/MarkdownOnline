/**
 * @license bigonion
 *
 * kit.js
 *
 * LICENSE MIT
 */const s={moveIt:function(e,t){t.style.position="absolute";var n=!1,o=0,r=0;e.onmousedown=function(a){a.preventDefault(),o=a.pageX-t.offsetLeft,r=a.pageY-t.offsetTop,n=!0},e.onmouseup=function(a){a.preventDefault(),o=a.pageX-t.offsetLeft,r=a.pageY-t.offsetTop,n=!1},window.onmouseup=function(){n=!1},window.onmousemove=function(a){n&&(t.style.left=a.pageX-o+"px",t.style.top=a.pageY-r+"px")}},findId:function(e){return document.getElementById(e)},findClass:function(e){return document.getElementsByClassName(e)},setCookie:function(e,t,n=0,o="/",r=window.location.host){var a=new Date;a.setTime(a.getTime()+n*24*60*60*1e3);var i="expires="+a.toGMTString(),u="path="+o,c="domain="+r;document.cookie=e+"="+t+"; "+i+"; "+u+"; "+c},getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){var r=n[o].trim();if(r.indexOf(t)==0)return r.substring(t.length,r.length)}return""},log:function(e){console.log(e)},sleep:e=>new Promise(t=>setTimeout(t,e)),setClipBoard:function(e=""){let t=document.createElement("input");t.style.position="fixed",t.style.top="0px",t.style.opacity="0%",t.style.zIndex="-999",document.body.appendChild(t),t.value=e,t.focus(),t.select();try{let n=document.execCommand("copy");document.body.removeChild(t),console.log(n?"复制成功":"复制失败")}catch{document.body.removeChild(t),alert("当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作")}},isFocus:function(e){return e==document.activeElement?1:0},ajax:function(e){e.way=e.way?e.way:"GET",e.async=e.async?e.async:!0,e.header=e.header?e.header:{"content-type":"json"},e.onload=e.onload?e.onload:n=>{console.log(n)};var t=new XMLHttpRequest;t.open(e.way,e.url,e.async);for(let n=0;n<=Object.keys(e.header).length-1;n++){let o=Object.keys(e.header)[n],r=Object.values(e.header)[n];t.setRequestHeader(o,r)}t.send(JSON.stringify(e.body)),t.onreadystatechange=()=>{t.readyState==4&&t.status==200&&e.onload(t)}},getUUID:function(){for(var e=[],t="0123456789abcdef",n=0;n<36;n++)e[n]=t.substr(Math.floor(Math.random()*16),1);e[14]="4",e[19]=t.substr(e[19]&3|8,1),e[8]=e[13]=e[18]=e[23]="-";var o=e.join("");return o},sound2Word:function(e="zh-CN",t=!1){var n=new webkitSpeechRecognition;return n.lang=e,n.interimResults=t,n.onresult=function(o){console.log(o.results[0][0].transcript)},n.start(),n},addStyle:function(e,t="text/css"){var n=document.createElement("style");n.type=t,n.className="CSSAddedByKit",n.innerHTML=e,document.getElementsByTagName("HEAD")[0].appendChild(n)},removeAddedStyle:function(){for(let e of s.findClass("CSSAddedByKit"))e.remove()},getMounth:function(){return new Date().getMonth()+1},getDay:function(){return new Date().getDate()},getWeek:function(){let e=new Array("7","1","2","3","4","5","6"),t=new Date;return t.getDay()===0?7:e[t.getDay()]},getHours:function(){return new Date().getHours()},getMinutes:function(){return new Date().getMinutes()},getSeconds:function(){return new Date().getSeconds()},getTime:function(){return s.getMounth().toString()+"月"+s.getDay()+"日 星期"+s.getWeek()+" "+s.getHours()+"时 "+s.getMinutes()+"分 "+s.getSeconds()+"秒"},import:function(e){let t=document.createElement("script");t.setAttribute("type","text/javascript"),t.src=e,document.documentElement.appendChild(t),console.log("imported @"+e)},addScript:e=>{let t=document.createElement("script");t.setAttribute("type","text/javascript"),t.innerHTML=e,document.documentElement.appendChild(t),console.log("scripts added")},version:"v0.12.3"};export{s as k};
