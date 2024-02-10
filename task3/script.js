const bigLightElement = document.querySelector('#bigLight')
const upLightElement = document.querySelector('#upLight')
const middleLightElement = document.querySelector('#middleLight')
const downLightElement = document.querySelector('#downLight')

bigLightElement.addEventListener('click', makeGreen)

function makeGreen() {
    upLightElement.style.background = ('green')
    downLightElement.style.background = ('black')
    bigLightElement.removeEventListener('click', makeGreen)
    bigLightElement.addEventListener('click', makeYellow)
}

function makeYellow() {
    middleLightElement.style.background = ('yellow')
    upLightElement.style.background = ('black')
    bigLightElement.removeEventListener('click', makeYellow)
    bigLightElement.addEventListener('click', makeRed)
}

function makeRed() {
    downLightElement.style.background = ('red')
    middleLightElement.style.background = ('black')
    bigLightElement.removeEventListener('click', makeRed)
    bigLightElement.addEventListener('click', makeGreen)
}

