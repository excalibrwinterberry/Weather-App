// import createHTMLTag from "./createTag"
import currentWeatherElement from "./currentWeather"
import hourlyWeatherElement from "./hourlyWeather"

export default function displaySection(){

    const container = document.createElement('div')
    container.setAttribute('id', 'weatherContainer')

    const weatherDisplay = document.createElement('div')
    weatherDisplay.setAttribute('id', 'weatherDisplay')

    const currentWeather = currentWeatherElement()

    const hourlyWeather = hourlyWeatherElement()

    weatherDisplay.appendChild(currentWeather)
    weatherDisplay.appendChild(hourlyWeather)


    container.appendChild(weatherDisplay)

    return container
}