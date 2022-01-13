/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Header/header.js":
/*!******************************!*\
  !*** ./src/Header/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
    const header = document.createElement('header')

    const cityNameInput = document.createElement('input')
    cityNameInput.setAttribute('type', 'text')
    cityNameInput.setAttribute('id', 'cityName')

    const submitCityName = document.createElement('button')
    submitCityName.setAttribute('id', 'setCityBtn')
    submitCityName.textContent = 'Get Weather'

    header.appendChild(cityNameInput)
    header.appendChild(submitCityName)

    return header
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header/header */ "./src/Header/header.js");


const City = (() =>{
    let name = 'Patna'

    const setCityName = (newCity) =>{
        name = newCity
    }

    const getCityName = ()=>{
        return name
    }

    return {setCityName, getCityName}
})()

const getWeatherData = async (cityName) =>{
    try {
        const latLongCity = await (await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=7c270a6210a705967565a0090c676750`, {mode: 'cors'})).json()
        const weatherData = await (await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latLongCity[0]['lat']}&lon=${latLongCity[0]['lon']}&exclude=minutely,alerts&units=metric&appid=7c270a6210a705967565a0090c676750` ,{mode: 'cors'})).json()
        
        // console.log(weatherData)

        return weatherData
        
    } catch (error) {
        console.log('Data not available')
    }

}

const handleGetCity = (e)=>{

    City.setCityName(document.querySelector('#cityName').value)
    getWeatherData(City.getCityName())
        .then(resp=> console.log(resp))

}

const initialDisplaySetup = (()=>{


    const addHeader = () =>{
        document.querySelector('#main').appendChild((0,_Header_header__WEBPACK_IMPORTED_MODULE_0__["default"])())
        document.querySelector('#setCityBtn').addEventListener('click', handleGetCity)
    }

    return {addHeader}

})()

initialDisplaySetup.addHeader()

    


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsaUdBQWlHLFNBQVMsbURBQW1ELGFBQWE7QUFDMUssc0dBQXNHLHNCQUFzQixPQUFPLHNCQUFzQixnRkFBZ0YsYUFBYTtBQUN0UDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0Esb0RBQW9ELDBEQUFNO0FBQzFEO0FBQ0E7O0FBRUEsWUFBWTs7QUFFWixDQUFDOztBQUVEOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvSGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuXG4gICAgY29uc3QgY2l0eU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaXR5TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICBjaXR5TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2l0eU5hbWUnKVxuXG4gICAgY29uc3Qgc3VibWl0Q2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdENpdHlOYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2V0Q2l0eUJ0bicpXG4gICAgc3VibWl0Q2l0eU5hbWUudGV4dENvbnRlbnQgPSAnR2V0IFdlYXRoZXInXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eU5hbWVJbnB1dClcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3VibWl0Q2l0eU5hbWUpXG5cbiAgICByZXR1cm4gaGVhZGVyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaGVhZGVyIGZyb20gXCIuL0hlYWRlci9oZWFkZXJcIlxuXG5jb25zdCBDaXR5ID0gKCgpID0+e1xuICAgIGxldCBuYW1lID0gJ1BhdG5hJ1xuXG4gICAgY29uc3Qgc2V0Q2l0eU5hbWUgPSAobmV3Q2l0eSkgPT57XG4gICAgICAgIG5hbWUgPSBuZXdDaXR5XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q2l0eU5hbWUgPSAoKT0+e1xuICAgICAgICByZXR1cm4gbmFtZVxuICAgIH1cblxuICAgIHJldHVybiB7c2V0Q2l0eU5hbWUsIGdldENpdHlOYW1lfVxufSkoKVxuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChjaXR5TmFtZSkgPT57XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbGF0TG9uZ0NpdHkgPSBhd2FpdCAoYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5TmFtZX0mbGltaXQ9MSZhcHBpZD03YzI3MGE2MjEwYTcwNTk2NzU2NWEwMDkwYzY3Njc1MGAsIHttb2RlOiAnY29ycyd9KSkuanNvbigpXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgKGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXRMb25nQ2l0eVswXVsnbGF0J119Jmxvbj0ke2xhdExvbmdDaXR5WzBdWydsb24nXX0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmdW5pdHM9bWV0cmljJmFwcGlkPTdjMjcwYTYyMTBhNzA1OTY3NTY1YTAwOTBjNjc2NzUwYCAse21vZGU6ICdjb3JzJ30pKS5qc29uKClcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKVxuXG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YVxuICAgICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRGF0YSBub3QgYXZhaWxhYmxlJylcbiAgICB9XG5cbn1cblxuY29uc3QgaGFuZGxlR2V0Q2l0eSA9IChlKT0+e1xuXG4gICAgQ2l0eS5zZXRDaXR5TmFtZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eU5hbWUnKS52YWx1ZSlcbiAgICBnZXRXZWF0aGVyRGF0YShDaXR5LmdldENpdHlOYW1lKCkpXG4gICAgICAgIC50aGVuKHJlc3A9PiBjb25zb2xlLmxvZyhyZXNwKSlcblxufVxuXG5jb25zdCBpbml0aWFsRGlzcGxheVNldHVwID0gKCgpPT57XG5cblxuICAgIGNvbnN0IGFkZEhlYWRlciA9ICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpLmFwcGVuZENoaWxkKGhlYWRlcigpKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0Q2l0eUJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlR2V0Q2l0eSlcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZEhlYWRlcn1cblxufSkoKVxuXG5pbml0aWFsRGlzcGxheVNldHVwLmFkZEhlYWRlcigpXG5cbiAgICBcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9