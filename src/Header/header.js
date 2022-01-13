export default function header() {
    const header = document.createElement('header')

    const cityNameInput = document.createElement('input')
    cityNameInput.setAttribute('type', 'text')
    cityNameInput.setAttribute('id', 'cityName')

    const submitCityName = document.createElement('button')
    submitCityName.setAttribute('id', 'setCityBtn')
    submitCityName.textContent = 'Get Weather'

    header.appendChild(cityNameInput)
    header.appendChild(submitCityName)

    return header
}