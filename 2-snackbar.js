import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-BbbuE1sJ.js";const n=document.querySelector("form");n.addEventListener("submit",l);function l(i){i.preventDefault();const o=i.currentTarget,e=parseInt(o.querySelector('[name="delay"]').value,10),s=o.querySelector('[name="state"]:checked').value;new Promise((t,m)=>{setTimeout(()=>{s==="fulfilled"?t(e):m(e)},e)}).then(t=>{r.show({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,timeout:e,position:"topRight"})},t=>{r.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,timeout:e,position:"topRight"})}),o.reset()}
//# sourceMappingURL=2-snackbar.js.map
