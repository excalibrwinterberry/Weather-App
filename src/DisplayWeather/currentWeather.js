import createHTMLTag from "./createTag"

export default function currentWeatherElement(){

    const container = createHTMLTag('div', 'currentWeather', [])

    container.appendChild(createHTMLTag('p', 'weatherLoc', []))
    container.appendChild(createHTMLTag('p', 'weatherTemp', []))
    container.appendChild(createHTMLTag('p', 'weatherMain', []))

    const weatherIconContainer = createHTMLTag('p', 'weatherIconContainer', [])
    weatherIconContainer.appendChild(createHTMLTag('img', 'weatherIcon', []))

    container.appendChild(weatherIconContainer)
    const weatherHighLow = createHTMLTag('p', 'weatherHighLow', [])
    weatherHighLow.appendChild(createHTMLTag('div', 'weatherHigh', []))
    weatherHighLow.appendChild(createHTMLTag('div', 'weatherLow', []))
    container.appendChild(weatherHighLow)



    return container
}