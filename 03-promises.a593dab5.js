function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector("form");function u(e,t){const o=Math.random()>.3;return new Promise((function(n,i){setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}l.addEventListener("submit",(t=>{t.preventDefault();const o={delay:Number(l.delay.value),step:Number(l.step.value),amount:Number(l.amount.value)};for(let t=1;t<=o.amount;t++)u(t,o.delay).then((({position:t,delay:o})=>{e(r).Notify.success(`Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(r).Notify.failure(`Rejected promise ${t} in ${o}ms`)})),o.delay+=o.step}));
//# sourceMappingURL=03-promises.a593dab5.js.map
