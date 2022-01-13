const getWeatherData = async () =>{
    try {
        const latLongCity = await (await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Patna&limit=1&appid=7c270a6210a705967565a0090c676750`, {mode: 'cors'})).json()
        const weatherData = await (await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latLongCity[0]['lat']}&lon=${latLongCity[0]['lon']}&exclude=&appid=7c270a6210a705967565a0090c676750` ,{mode: 'cors'})).json()
        // const weatherData = await data.json()
        // const weatherIconURL  = `http://openweathermap.org/img/wn/${weatherData['weather'][0]['icon']}@2x.png`
        // const weatherMain = weatherData['weather'][0]['main']
        // const weatherDesc = weatherData['weather'][0]['description']

        console.log(latLongCity)
        console.log(weatherData)
        
    } catch (error) {
        console.log('Data not available')
    }

}

getWeatherData()