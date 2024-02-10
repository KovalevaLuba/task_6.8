const inputElement = document.querySelector('input')
const buttonElement = document.querySelector('button')
const textElement = document.querySelector('#duplicateField')

inputElement.addEventListener ('input', function () {
   textElement.textContent = this.value
})

buttonElement.addEventListener ('click', function() {
    console.log(inputElement.value)
    inputElement.value = ''
    textElement.textContent = ''
})