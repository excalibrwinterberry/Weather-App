import header from "./Header/header"
import displaySection from "./DisplayWeather/displaySection"
// import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

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
        return weatherData
    } catch (error) {
        console.log('Data not available')
    }

}

const handleGetCity =async (e)=>{

    City.setCityName(document.querySelector('#cityName').value)
    const weatherData = await getWeatherData(City.getCityName())
    if(weatherData){
        const timeStampCurrent = weatherData['current']['dt']
        const timeStampCheck = weatherData['daily'][0]['dt']
        const timeCurrent = new Date(timeStampCurrent*1000)
        const timeCheck = new Date(timeStampCheck*1000)
    }else{
        console.log('error')
    }

}



const initialDisplaySetup = (()=>{


    const addHeader = () =>{
        document.querySelector('#main').appendChild(header())
        document.querySelector('#setCityBtn').addEventListener('click', handleGetCity)
    }

    const addWeather = () =>{
        document.querySelector('#main').appendChild(displaySection())
    }

    return {addHeader, addWeather}

})()

initialDisplaySetup.addHeader()
initialDisplaySetup.addWeather()
    

