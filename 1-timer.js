import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as u}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("[data-start]");let s=null,d;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(u.warning({title:"Warning!",message:"Please choose a date in the future"}),r.disabled=!0):(s=t,r.disabled=!1)}};y("#datetime-picker",S);r.addEventListener("click",function(){s&&(r.disabled=!0,d=setInterval(()=>{const e=s-new Date;if(e<=0){clearInterval(d),i(0,0,0,0),u.success({title:"Success!",message:"Timer has finished!"});return}const{days:t,hours:n,minutes:o,seconds:c}=p(e);i(t,n,o,c)},1e3))});function p(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}function i(e,t,n,o){document.querySelector("[data-days]").textContent=a(e),document.querySelector("[data-hours]").textContent=a(t),document.querySelector("[data-minutes]").textContent=a(n),document.querySelector("[data-seconds]").textContent=a(o)}function a(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map