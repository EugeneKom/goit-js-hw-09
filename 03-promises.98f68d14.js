var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("iQIUW");const r={formEl:document.querySelector("form"),firstDelayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]')};let u=0,l=0,a=0,d=1;function p(e,n){0!==n&&setTimeout((()=>{(function(e,n){const t=Math.random()>.3;return new Promise(((o,i)=>{t?o({position:e,delay:n}):i({position:e,delay:n})}))})(d,e).then((({position:e,delay:n})=>{i.Notify.warning(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{i.Notify.warning(`❌ Rejected promise ${e} in ${n}ms`)})),d+=1,p(e+=l,n-=1)}),e)}r.formEl.addEventListener("submit",(e=>{e.preventDefault(),u=+r.firstDelayInput.value,l=+r.stepInput.value,a=+r.amountInput.value,p(u,a)}));
//# sourceMappingURL=03-promises.98f68d14.js.map
