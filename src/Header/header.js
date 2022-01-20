export default function header() {
    const headerDiv = document.createElement('div')
    headerDiv.setAttribute('id', 'headerDiv')

    const divInput = document.createElement('div')
    divInput.classList.add('row')

    const cityNameInput = document.createElement('input')
    cityNameInput.setAttribute('type', 'text')
    cityNameInput.placeholder = 'Enter City Name'
    cityNameInput.setAttribute('id', 'cityName')

    const submitCityName = document.createElement('button')
    submitCityName.setAttribute('id', 'setCityBtn')
    submitCityName.classList.add('btn')
    submitCityName.textContent = 'Get Weather'

    divInput.appendChild(cityNameInput)
    divInput.appendChild(submitCityName)

    headerDiv.appendChild(divInput)

    return headerDiv
}