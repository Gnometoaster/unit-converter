const convertBtn = document.getElementById("convert-btn")
let lengthResultEl = document.getElementById("length-result")
let volumeResultEl = document.getElementById("volume-result")
let massResultEl = document.getElementById("mass-result")
let input = document.getElementById("units")


function convertLength() {
    let meters = input.value / 3.281
    let feet = input.value * 3.281
    lengthResultEl.textContent = `${input.value} meters = ${feet.toFixed(3)} feet | ${input.value} feet = ${meters.toFixed(3)} meters`

}
function convertVolume() {
    let liters = input.value / 0.264
    let gallons = input.value * 0.264
    volumeResultEl.textContent = `${input.value} liters = ${gallons.toFixed(3)} gallons | ${input.value} gallons = ${liters.toFixed(3)} liters`

}
function convertMass() {
    let kilos = input.value / 2.204
    let pounds = input.value * 2.204
    massResultEl.textContent = `${input.value} kilos = ${pounds.toFixed(3)} pounds | ${input.value} pounds  = ${kilos.toFixed(3)} kilos`

}

convertBtn.addEventListener("click", convertLength,)
convertBtn.addEventListener("click", convertVolume,)
convertBtn.addEventListener("click", convertMass,)