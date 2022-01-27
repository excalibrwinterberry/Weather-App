import header from "./Header/header"
import displaySection from "./DisplayWeather/displaySection"
import './style.css'
import hourWeather from "./DisplayWeather/hourWeather"

let cityName1 = 'Patna'

let weatherData1 = {}

let cityLoc1 = []


let celcius = true

const setTemperatureDegree = (temperature) =>{
    if(celcius){
        return Math.round(temperature) + '°C'
    }

    return Math.round(temperature*1.8 + 32) + '°F'
}

const getWeatherData = async (location) =>{
    try {
        const weatherData = await (await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location[0]}&lon=${location[1]}&exclude=minutely,alerts&units=metric&appid=7c270a6210a705967565a0090c676750` ,{mode: 'cors'})).json()
        return weatherData
    } catch (error) {
        console.log('Data not available')
    }

}

const getCityLocation = async (cityName) =>{
    try{
        const latLongCity = await (await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=7c270a6210a705967565a0090c676750`, {mode: 'cors'})).json()
        return [latLongCity[0]['lat'], latLongCity[0]['lon']]
    }catch(error){
        console.log('City entered is not correct')
    }
}



const setCurrentWeather = (weatherData) =>{
    document.querySelector('#weatherLoc').textContent = `${cityName1}`
    document.querySelector('#weatherTemp').textContent = setTemperatureDegree(weatherData['current']['temp'])
    document.querySelector('#weatherMain').textContent = `${weatherData['current']['weather'][0]['main']}` 
    document.querySelector('#weatherIcon').src = `http://openweathermap.org/img/wn/${weatherData['current']['weather'][0]['icon']}@2x.png`
    document.querySelector('#weatherHigh').textContent = `High : ${setTemperatureDegree(weatherData['daily'][0]['temp']['max'])}` 
    document.querySelector('#weatherLow').textContent  = `Low : ${setTemperatureDegree(weatherData['daily'][0]['temp']['min'])}`
    document.querySelector('#sunrise').textContent = `Sunrise: ${(new Date(weatherData['current']['sunrise'] * 1000)).getHours()}:${(new Date(weatherData['current']['sunrise'] * 1000)).getMinutes()}` 
    document.querySelector('#sunset').textContent = `Sunset: ${(new Date(weatherData['current']['sunset'] * 1000)).getHours()}:${(new Date(weatherData['current']['sunset'] * 1000)).getMinutes()}`

}

const setHourlyWeather = (weatherData) =>{
    const hourlyWeatherDiv = document.querySelector('#hourlyWeatherForcast')
    while(hourlyWeatherDiv.firstChild){
        hourlyWeatherDiv.removeChild(hourlyWeatherDiv.firstChild)
    }
    for(let i=2; i<weatherData['hourly'].length; i++){
        hourlyWeatherDiv.appendChild(hourWeather(weatherData['hourly'][i], celcius))
    }
}

const setVariables = async () =>{
    try{
        cityLoc1 = await getCityLocation(cityName1)
        weatherData1 = await getWeatherData(cityLoc1)
        console.log(weatherData1)
    }catch{
        console.log('error')
    }
}


const handleGetCity =async (e)=>{
    try{
        cityName1 = document.querySelector('#cityName').value
        await setVariables()
        setCurrentWeather(weatherData1)
        setHourlyWeather(weatherData1)
    }catch{
        console.log('error')
    }


    // const cityLocaion = await getCityLocation(document.querySelector('#cityName').value)
    // if(cityLocaion){
    //     City.setCityName(document.querySelector('#cityName').value)
    //     const weatherData = await getWeatherData(cityLocaion)
    //     if(weatherData){
    //         setCurrentWeather(weatherData)
    //         console.log(weatherData)

    //         setHourlyWeather(weatherData)
    //     }
    // }
    // else{
    //     console.log('error')
    // }

}

const handleChangeDegree = (e) =>{
    celcius = !(celcius)
    setCurrentWeather(weatherData1)
    setHourlyWeather(weatherData1)
}


const initialDisplaySetup = (()=>{


    const addHeader = () =>{
        document.querySelector('#main').appendChild(header())
        document.querySelector('#setCityBtn').addEventListener('click', handleGetCity)
        document.querySelector('#changeDegree').addEventListener('click', handleChangeDegree)

    }

    const addWeather = () =>{
        document.querySelector('#main').appendChild(displaySection())
    }

    const displayOnLoad = async ()=>{
        cityName1 = 'Patna'
        await setVariables()
        setCurrentWeather(weatherData1)
        setHourlyWeather(weatherData1)
    }


    return {addHeader, addWeather, displayOnLoad}

})()

initialDisplaySetup.addHeader()
initialDisplaySetup.addWeather()
initialDisplaySetup.displayOnLoad()
