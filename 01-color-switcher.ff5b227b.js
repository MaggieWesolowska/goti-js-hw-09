const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let r;t.addEventListener("click",(()=>{r=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.ff5b227b.js.map
