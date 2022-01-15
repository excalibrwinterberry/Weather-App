function createTagID(tagType, tagId){
    const temp = document.createElement(tagType)
    temp.setAttribute('id', tagId)

    return temp
}

export default function displaySection(){

    const container = document.createElement('div')
    container.setAttribute('id', 'weatherContainer')

    const weatherData = document.createElement('div')
    weatherData.setAttribute('id', 'weatherData')

    const currentWeather = document.createElement('div')
    currentWeather.setAttribute('id', 'currentWeather')

    const weatherHeadline = document.createElement('div')
    weatherHeadline.setAttribute('id', 'weatherHeadline')

    const cityWeather = document.createElement('div')
    cityWeather.setAttribute('id', 'cityWeather')

    const currentTemp = document.createElement('div')
    currentTemp.setAttribute('id', 'currentTemp')


    currentWeather.appendChild(weatherHeadline)
    currentWeather.appendChild(cityWeather)
    currentWeather.appendChild(currentTemp)
    currentWeather.appendChild(createTagID('div', 'iconWeather'))


    const hourlyWeather = document.createElement('div')
    hourlyWeather.setAttribute('id', 'hourlyWeather')

    const dailyWeather = document.createElement('div')
    dailyWeather.setAttribute('id', 'dailyWeather')


    weatherData.appendChild(currentWeather)
    weatherData.appendChild(hourlyWeather)
    weatherData.appendChild(dailyWeather)

    container.appendChild(weatherData)
    return container
}