import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as l}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector("[data-start]"),c=document.querySelector("#datetime-picker");let s=null,d;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(l.error({title:"Warning!",message:"Please choose a date in the future",position:"topRight"}),a.disabled=!0):(s=t,a.disabled=!1)}};p("#datetime-picker",S);a.addEventListener("click",function(){s&&(a.disabled=!0,c.disabled=!0,d=setInterval(()=>{const e=s-new Date;if(e<=0){clearInterval(d),u(0,0,0,0),l.success({title:"Success!",message:"Timer has finished!",position:"topRight"}),c.disabled=!1;return}const{days:t,hours:n,minutes:o,seconds:i}=b(e);u(t,n,o,i)},1e3))});function b(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function u(e,t,n,o){document.querySelector("[data-days]").textContent=r(e),document.querySelector("[data-hours]").textContent=r(t),document.querySelector("[data-minutes]").textContent=r(n),document.querySelector("[data-seconds]").textContent=r(o)}function r(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
