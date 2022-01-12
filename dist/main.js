/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const getWeatherData = async () =>{
    try {
        const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Patna&appid=7c270a6210a705967565a0090c676750' ,{mode: 'cors'})
        const weatherData = await data.json()
        const weatherIconURL  = `http://openweathermap.org/img/wn/${weatherData['weather'][0]['icon']}@2x.png`
        const weatherMain = weatherData['weather'][0]['main']
        const weatherDesc = weatherData['weather'][0]['description']


        console.log(weatherIconURL)
        console.log(weatherMain)
        console.log(weatherDesc)
        
    } catch (error) {
        console.log('Data not available')
    }

}

getWeatherData()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSxvSUFBb0ksYUFBYTtBQUNqSjtBQUNBLG9FQUFvRSxrQ0FBa0M7QUFDdEc7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKCkgPT57XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVBhdG5hJmFwcGlkPTdjMjcwYTYyMTBhNzA1OTY3NTY1YTAwOTBjNjc2NzUwJyAse21vZGU6ICdjb3JzJ30pXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZGF0YS5qc29uKClcbiAgICAgICAgY29uc3Qgd2VhdGhlckljb25VUkwgID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGFbJ3dlYXRoZXInXVswXVsnaWNvbiddfUAyeC5wbmdgXG4gICAgICAgIGNvbnN0IHdlYXRoZXJNYWluID0gd2VhdGhlckRhdGFbJ3dlYXRoZXInXVswXVsnbWFpbiddXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEZXNjID0gd2VhdGhlckRhdGFbJ3dlYXRoZXInXVswXVsnZGVzY3JpcHRpb24nXVxuXG5cbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckljb25VUkwpXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJNYWluKVxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGVzYylcbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgbm90IGF2YWlsYWJsZScpXG4gICAgfVxuXG59XG5cbmdldFdlYXRoZXJEYXRhKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=