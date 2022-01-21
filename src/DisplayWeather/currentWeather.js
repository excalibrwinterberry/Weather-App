import createHTMLTag from "./createTag"

export default function currentWeatherElement(){

    const container = createHTMLTag('div', 'currentWeather', [])

    const locWeather = createHTMLTag('div', 'locWeather', ['item'])
    const weatherIcon = createHTMLTag('div', 'weatherIcon', ['item'])
    const weatherTemp = createHTMLTag('div', 'weatherTemp', ['item'])
    const sunriseSet = createHTMLTag('div', 'sunriseSet', ['item'])

    locWeather.appendChild(createHTMLTag('p', 'showCityName', []))
    weatherIcon.appendChild(createHTMLTag('img', 'iconImg', []))
    weatherTemp.appendChild(createHTMLTag('p', 'currentTemp', []))
    weatherTemp.appendChild(createHTMLTag('p', 'tempHL', []))
    sunriseSet.appendChild(createHTMLTag('p', 'sunrise', []))
    sunriseSet.appendChild(createHTMLTag('p', 'sunset', []))
    
    
    container.appendChild(locWeather)
    container.appendChild(weatherTemp)
    container.appendChild(weatherIcon)
    container.appendChild(sunriseSet)

    return container
}