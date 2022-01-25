import createHTMLTag from "./createTag"

export default function hourlyWeatherElement(){

    const container = createHTMLTag('div', 'hourlyWeather', [])
    const hourlyWeatherTitle = createHTMLTag('p', 'hourTitle', [])
    hourlyWeatherTitle.textContent = 'Hourly Forecast'

    const hourlyWeatherForcast = createHTMLTag('div', 'hourlyWeatherForcast', [])

    container.appendChild(hourlyWeatherTitle)
    container.appendChild(hourlyWeatherForcast)
    return container
}