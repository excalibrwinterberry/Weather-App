/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const getWeatherData = async () =>{
    try {
        const latLongCity = await (await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Patna&limit=1&appid=7c270a6210a705967565a0090c676750`, {mode: 'cors'})).json()
        const weatherData = await (await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latLongCity[0]['lat']}&lon=${latLongCity[0]['lon']}&exclude=&appid=7c270a6210a705967565a0090c676750` ,{mode: 'cors'})).json()
        // const weatherData = await data.json()
        // const weatherIconURL  = `http://openweathermap.org/img/wn/${weatherData['weather'][0]['icon']}@2x.png`
        // const weatherMain = weatherData['weather'][0]['main']
        // const weatherDesc = weatherData['weather'][0]['description']

        console.log(latLongCity)
        console.log(weatherData)
        
    } catch (error) {
        console.log('Data not available')
    }

}

getWeatherData()
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSx1SkFBdUosYUFBYTtBQUNwSyxzR0FBc0csc0JBQXNCLE9BQU8sc0JBQXNCLG9EQUFvRCxhQUFhO0FBQzFOO0FBQ0EsdUVBQXVFLGtDQUFrQztBQUN6RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyAoKSA9PntcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBsYXRMb25nQ2l0eSA9IGF3YWl0IChhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT1QYXRuYSZsaW1pdD0xJmFwcGlkPTdjMjcwYTYyMTBhNzA1OTY3NTY1YTAwOTBjNjc2NzUwYCwge21vZGU6ICdjb3JzJ30pKS5qc29uKClcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCAoYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdExvbmdDaXR5WzBdWydsYXQnXX0mbG9uPSR7bGF0TG9uZ0NpdHlbMF1bJ2xvbiddfSZleGNsdWRlPSZhcHBpZD03YzI3MGE2MjEwYTcwNTk2NzU2NWEwMDkwYzY3Njc1MGAgLHttb2RlOiAnY29ycyd9KSkuanNvbigpXG4gICAgICAgIC8vIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZGF0YS5qc29uKClcbiAgICAgICAgLy8gY29uc3Qgd2VhdGhlckljb25VUkwgID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGFbJ3dlYXRoZXInXVswXVsnaWNvbiddfUAyeC5wbmdgXG4gICAgICAgIC8vIGNvbnN0IHdlYXRoZXJNYWluID0gd2VhdGhlckRhdGFbJ3dlYXRoZXInXVswXVsnbWFpbiddXG4gICAgICAgIC8vIGNvbnN0IHdlYXRoZXJEZXNjID0gd2VhdGhlckRhdGFbJ3dlYXRoZXInXVswXVsnZGVzY3JpcHRpb24nXVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGxhdExvbmdDaXR5KVxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSlcbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgbm90IGF2YWlsYWJsZScpXG4gICAgfVxuXG59XG5cbmdldFdlYXRoZXJEYXRhKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=