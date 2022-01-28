(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Fjalla One', sans-serif;\n}\n\n#headerDiv{\n    height: 100px;\n    background: rgba(75, 148, 32, 0.712);\n    position: relative;\n    text-align: center;\n}\n\nheader{\n    padding: 30px;\n    text-align: center;\n}\n\n#cityName{\n    width: 200px;\n    height: 35px;\n    border-radius: 4px;\n    padding-left: 4px;\n    border: none;\n    font-size: large;\n    margin: 0 20px;\n}\n\nbutton {\n    background-color: #8a7a35; /* Green */\n    border: none;\n    color: white;\n    padding: 10px 22px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    cursor: pointer;\n    -webkit-transition-duration: 0.4s; /* Safari */\n    transition-duration: 0.4s;\n\n    border-radius: 4px;\n  }\n\n  button:hover {\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\n  }\n\n\n#currentWeather{\n    height: 370px;\n    background: rgb(224, 231, 229);\n    padding: 20px;\n    padding-top: 50px;\n    text-align: center;\n\n}\n\n#weatherLoc{\n    font-size: 30px;\n}\n\n#weatherTemp{\n    font-size: 45px;\n}\n#weatherHighLow, #sunRiseSet{\n    display: inline-flex;\n    font-size: larger;\n    padding: 20px;\n}\n\n#weatherHigh, #sunrise{\n    margin-right: 15px;\n}\n\n#hourlyWeather{\n    /* background: rgb(196, 175, 175); */\n    height: 260px;\n    width: 100%;\n    \n}\n\n#hourlyWeatherForcast{\n    width: 100%;\n    text-align: center;\n    display: inline-flex;\n    overflow-x: auto;\n    overflow-y: hidden;\n    white-space: nowrap;\n    padding-bottom: 20px;\n}\n\n#hourTitle{\n    background: rgb(196, 175, 175);\n    padding: 15px;\n    font-size: larger;\n    margin-bottom: 20px;\n    color: rgb(54, 109, 91);\n}\n\n\n\n\n\n\n\n\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],p=o[s]||0,u="".concat(s," ").concat(p);o[s]=p+1;var l=n(u),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)t[l].references++,t[l].updater(h);else{var m=a(h,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var p=n(o[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,t,n){const r=document.createElement(e);return""!==t&&r.setAttribute("id",t),0!==n.length&&r.classList.add(...n),r}var t=n(379),r=n.n(t),a=n(795),o=n.n(a),i=n(569),c=n.n(i),d=n(565),s=n.n(d),p=n(216),u=n.n(p),l=n(589),h=n.n(l),m=n(426),g={};function f(t,n){const r=e("div","",["hourWeather"]),a=e("p","",["hourTemp"]);a.textContent=((e,t)=>t?Math.round(e)+"°C":Math.round(1.8*e+32)+"°F")(t.temp,n);const o=e("img","",["hourIcon"]);o.src=`http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`;const i=e("p","",["hourTime"]);return i.textContent=new Date(1e3*t.dt).getHours(),r.appendChild(a),r.appendChild(o),r.appendChild(i),r}g.styleTagTransform=h(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),r()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;let y="Patna",v={},x=[],w=!0;const C=e=>w?Math.round(e)+"°C":Math.round(1.8*e+32)+"°F",b=e=>{document.querySelector("#weatherLoc").textContent=`${y}`,document.querySelector("#weatherTemp").textContent=C(e.current.temp),document.querySelector("#weatherMain").textContent=`${e.current.weather[0].main}`,document.querySelector("#weatherIcon").src=`http://openweathermap.org/img/wn/${e.current.weather[0].icon}@2x.png`,document.querySelector("#weatherHigh").textContent=`High : ${C(e.daily[0].temp.max)}`,document.querySelector("#weatherLow").textContent=`Low : ${C(e.daily[0].temp.min)}`,document.querySelector("#sunrise").textContent=`Sunrise: ${new Date(1e3*e.current.sunrise).getHours()}:${new Date(1e3*e.current.sunrise).getMinutes()}`,document.querySelector("#sunset").textContent=`Sunset: ${new Date(1e3*e.current.sunset).getHours()}:${new Date(1e3*e.current.sunset).getMinutes()}`},S=e=>{const t=document.querySelector("#hourlyWeatherForcast");for(;t.firstChild;)t.removeChild(t.firstChild);for(let n=2;n<e.hourly.length;n++)t.appendChild(f(e.hourly[n],w))},E=async()=>{try{x=await(async e=>{try{const t=await(await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=1&appid=7c270a6210a705967565a0090c676750`,{mode:"cors"})).json();return[t[0].lat,t[0].lon]}catch(e){console.log("City entered is not correct")}})(y),v=await(async e=>{try{return await(await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${e[0]}&lon=${e[1]}&exclude=minutely,alerts&units=metric&appid=7c270a6210a705967565a0090c676750`,{mode:"cors"})).json()}catch(e){console.log("Data not available")}})(x),console.log(v)}catch{console.log("error")}},T=async e=>{try{y=document.querySelector("#cityName").value,await E(),b(v),S(v)}catch{console.log("error")}},q=e=>{w=!w,b(v),S(v)},L=()=>{document.querySelector("#main").appendChild(function(){const e=document.createElement("div");e.setAttribute("id","headerDiv");const t=document.createElement("header"),n=document.createElement("input");n.setAttribute("type","text"),n.placeholder="Enter City Name",n.setAttribute("id","cityName");const r=document.createElement("button");r.setAttribute("id","setCityBtn"),r.classList.add("btn"),r.textContent="Get Weather";const a=document.createElement("button");return a.setAttribute("id","changeDegree"),a.classList.add("btn"),a.textContent="°C/°F",t.appendChild(n),t.appendChild(r),t.appendChild(a),e.appendChild(t),e}()),document.querySelector("#setCityBtn").addEventListener("click",T),document.querySelector("#changeDegree").addEventListener("click",q)},M=()=>{document.querySelector("#main").appendChild(function(){const t=document.createElement("div");t.setAttribute("id","weatherContainer");const n=document.createElement("div");n.setAttribute("id","weatherDisplay");const r=function(){const t=e("div","currentWeather",[]);t.appendChild(e("p","weatherLoc",[])),t.appendChild(e("p","weatherTemp",[])),t.appendChild(e("p","weatherMain",[]));const n=e("p","weatherIconContainer",[]);n.appendChild(e("img","weatherIcon",[])),t.appendChild(n);const r=e("p","weatherHighLow",[]);r.appendChild(e("div","weatherHigh",[])),r.appendChild(e("div","weatherLow",[])),t.appendChild(r),t.appendChild(e("br","",[]));const a=e("p","sunRiseSet",[]);return a.appendChild(e("div","sunrise",[])),a.appendChild(e("div","sunset",[])),t.appendChild(a),t}(),a=function(){const t=e("div","hourlyWeather",[]),n=e("p","hourTitle",[]);n.textContent="Hourly Forecast";const r=e("div","hourlyWeatherForcast",[]);return t.appendChild(n),t.appendChild(r),t}();return n.appendChild(r),n.appendChild(a),t.appendChild(n),t}())},A=async()=>{y="Patna",await E(),b(v),S(v)};(()=>{const e=document.createElement("div");e.setAttribute("id","main"),document.getElementsByTagName("body")[0].appendChild(e)})(),L(),M(),A()})()})();