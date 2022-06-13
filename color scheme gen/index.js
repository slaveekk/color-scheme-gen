import {copyText, getColorsHtml, getHexHtml} from '/utils.js'

const form = document.getElementById("picker-form")
const button = document.getElementById("submit-button")

button.addEventListener('click', function(event) {
    event.preventDefault()
    fetch(`https://www.thecolorapi.com/scheme?hex=${form.elements['color-picker'].value.substring(1)}&mode=${form.elements['mode-selector'].value}&count=5`)
    .then(response => response.json())
    .then(data => {
        getHexHtml(data)
        getColorsHtml(data)
        const hexArr = document.getElementsByClassName("hex")
        for (const hex of hexArr) {
            hex.addEventListener('click', copyText(hex))
        }
    }) 
})





