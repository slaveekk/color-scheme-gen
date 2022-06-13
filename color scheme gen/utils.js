export {copyText, getColorsHtml, getHexHtml}

function copyText(textForCopy) {
    const text = textForCopy.textContent; 
    navigator.clipboard.writeText(text).then(function () {
        }), 
    function () {
        };
}

function getHexHtml(data) {
    document.getElementById('color-values').innerHTML = data.colors.map((colorObject) => {
        return ` 
            <div class="hex-code"><p class="hex">${colorObject.hex.value}</p></div>
        `
    }).join('')
}

function getColorsHtml(data) {
    document.getElementById('colors-container').innerHTML = data.colors.map((colorObject) => {
        return `
            <div class="color" style="background:${colorObject.hex.value}"></div>
        `
    }).join('')
}

