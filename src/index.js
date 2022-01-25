import header from "./Header/header"
import displaySection from "./DisplayWeather/displaySection"
// import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import hourWeather from "./DisplayWeather/hourWeather"

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

const getCityLocation = async (cityName) =>{
    try{
        const latLongCity = await (await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=7c270a6210a705967565a0090c676750`, {mode: 'cors'})).json()
        return [latLongCity[0]['lat'], latLongCity[0]['lon']]
    }catch(error){
        console.log('City entered is not correct')
    }
}

const getWeatherData = async (location) =>{
    try {
        const weatherData = await (await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location[0]}&lon=${location[1]}&exclude=minutely,alerts&units=metric&appid=7c270a6210a705967565a0090c676750` ,{mode: 'cors'})).json()
        return weatherData
    } catch (error) {
        console.log('Data not available')
    }

}

const setCurrentWeather = (weatherData) =>{
    console.log('setting data')
    document.querySelector('#weatherLoc').textContent = `${City.getCityName()}`
    document.querySelector('#weatherTemp').textContent = `${weatherData['current']['temp']}°C`
    document.querySelector('#weatherMain').textContent = `${weatherData['current']['weather'][0]['main']}`
    document.querySelector('#weatherIcon').src = `http://openweathermap.org/img/wn/${weatherData['current']['weather'][0]['icon']}@2x.png`
    document.querySelector('#weatherHigh').textContent = `H:${weatherData['daily'][0]['temp']['max']}°C`
    document.querySelector('#weatherLow').textContent  = `L:${weatherData['daily'][0]['temp']['min']}°C`

}

const handleGetCity =async (e)=>{

    
    const cityLocaion = await getCityLocation(document.querySelector('#cityName').value)
    if(cityLocaion){
        City.setCityName(document.querySelector('#cityName').value)
        const weatherData = await getWeatherData(cityLocaion)
        if(weatherData){
            setCurrentWeather(weatherData)
            const timeStampCurrent = weatherData['hourly'][0]['dt']
            // const timeStampCheck = weatherData['daily'][0]['dt']
            const timeCurrent = new Date(timeStampCurrent*1000)
            // const timeCheck = new Date(timeStampCheck*1000)
            console.log(timeCurrent.getHours())
            console.log(weatherData)

            weatherData['hourly'].map((weatherHour)=>{
                document.querySelector('#hourlyWeather').appendChild(hourWeather(weatherHour))
            })
        }
    }
    else{
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
    

