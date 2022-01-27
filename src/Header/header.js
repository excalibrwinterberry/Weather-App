export default function header() {
    const headerDiv = document.createElement('div')
    headerDiv.setAttribute('id', 'headerDiv')

    const header = document.createElement('header')

    const cityNameInput = document.createElement('input')
    cityNameInput.setAttribute('type', 'text')
    cityNameInput.placeholder = 'Enter City Name'
    cityNameInput.setAttribute('id', 'cityName')

    const submitCityName = document.createElement('button')
    submitCityName.setAttribute('id', 'setCityBtn')
    submitCityName.classList.add('btn')
    submitCityName.textContent = 'Get Weather'

    const changeDegree = document.createElement('button')
    changeDegree.setAttribute('id', 'changeDegree')
    changeDegree.classList.add('btn')
    changeDegree.textContent = '°C/°F'

    header.appendChild(cityNameInput)
    header.appendChild(submitCityName)
    header.appendChild(changeDegree)

    headerDiv.appendChild(header)

    return headerDiv
}