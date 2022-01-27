import createHTMLTag from "./createTag"

const setTemperatureDegree = (temperature, celcius) =>{
    if(celcius){
        return Math.round(temperature) + '°C'
    }

    return Math.round(temperature*1.8 + 32) + '°F'
}
export default function hourWeather(hourObject, celcius){

    const weatherHour = createHTMLTag('div', '', ['hourWeather'])
    const hourTemp = createHTMLTag('p', '', ['hourTemp'])
    hourTemp.textContent =  setTemperatureDegree(hourObject['temp'], celcius)
    
    const hourIcon = createHTMLTag('img', '', ['hourIcon'])
    hourIcon.src = `http://openweathermap.org/img/wn/${hourObject['weather'][0]['icon']}@2x.png`

    const hourTime = createHTMLTag('p', '', ['hourTime'])
    hourTime.textContent = (new Date(hourObject['dt'] * 1000)).getHours()
    
    weatherHour.appendChild(hourTemp)
    weatherHour.appendChild(hourIcon)
    weatherHour.appendChild(hourTime)

    return weatherHour
}