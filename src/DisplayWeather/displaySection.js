import createHTMLTag from "./createTag"
import currentWeatherElement from "./currentWeather"
import hourlyWeatherElement from "./hourlyWeather"
import dailyWeatherElement from "./dailyWeather"

export default function displaySection(){

    const container = document.createElement('div')
    container.setAttribute('id', 'weatherContainer')

    const weatherData = document.createElement('div')
    weatherData.setAttribute('id', 'weatherData')

    const currentWeather = currentWeatherElement()

    const hourlyWeather = hourlyWeatherElement()

    const dailyWeather = dailyWeatherElement()


    weatherData.appendChild(currentWeather)
    weatherData.appendChild(hourlyWeather)
    weatherData.appendChild(dailyWeather)

    container.appendChild(weatherData)
    return container
}