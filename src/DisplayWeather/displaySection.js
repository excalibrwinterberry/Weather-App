// import createHTMLTag from "./createTag"
import currentWeatherElement from "./currentWeather"
import hourlyWeatherElement from "./hourlyWeather"
import dailyWeatherElement from "./dailyWeather"

export default function displaySection(){

    const container = document.createElement('div')
    container.setAttribute('id', 'weatherContainer')

    const weatherDisplay = document.createElement('div')
    weatherDisplay.setAttribute('id', 'weatherDisplay')

    const currentWeather = currentWeatherElement()

    const hourlyWeather = hourlyWeatherElement()

    // const dailyWeather = dailyWeatherElement()

    // const todayWeather = document.createElement('div')
    // todayWeather.setAttribute('id', 'todayWeather')

    // todayWeather.appendChild(currentWeather)
    // todayWeather.appendChild(hourlyWeather)


    // weatherDisplay.appendChild(todayWeather)
    weatherDisplay.appendChild(currentWeather)
    weatherDisplay.appendChild(hourlyWeather)
    // weatherDisplay.appendChild(dailyWeather)

    container.appendChild(weatherDisplay)

    return container
}