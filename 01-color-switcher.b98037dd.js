!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=document.querySelector("body");var r=function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));o.style.backgroundColor=t};e.addEventListener("click",(function(){t=setInterval(r,1e3)})),n.addEventListener("click",(function(){clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.b98037dd.js.map
