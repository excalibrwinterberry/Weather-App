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

    header.appendChild(cityNameInput)
    header.appendChild(submitCityName)

    headerDiv.appendChild(header)

    return headerDiv
}