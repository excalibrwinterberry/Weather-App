import createHTMLTag from "./createTag"
export default function hourWeather(hourObject){

    const weatherHour = createHTMLTag('div', '', ['hourWeather'])
    const hourTemp = createHTMLTag('p', '', ['hourTemp'])
    hourTemp.textContent = `${hourObject['temp']}°C`
    
    const hourIcon = createHTMLTag('img', '', ['hourIcon'])
    hourIcon.src = `http://openweathermap.org/img/wn/${hourObject['weather'][0]['icon']}@2x.png`

    const hourTime = createHTMLTag('p', '', ['hourTime'])
    hourTime.textContent = (new Date(hourObject['dt'] * 1000)).getHours()
    
    weatherHour.appendChild(hourTemp)
    weatherHour.appendChild(hourIcon)
    weatherHour.appendChild(hourTime)

    return weatherHour
}