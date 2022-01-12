const getWeatherData = async () =>{
    try {
        const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Patna&appid=7c270a6210a705967565a0090c676750' ,{mode: 'cors'})
        const weatherData = await data.json()
        const weatherIconURL  = `http://openweathermap.org/img/wn/${weatherData['weather'][0]['icon']}@2x.png`
        const weatherMain = weatherData['weather'][0]['main']
        const weatherDesc = weatherData['weather'][0]['description']


        console.log(weatherIconURL)
        console.log(weatherMain)
        console.log(weatherDesc)
        
    } catch (error) {
        console.log('Data not available')
    }

}

getWeatherData()