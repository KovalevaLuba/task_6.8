const linkElement = document.querySelector('a')

linkElement.addEventListener ('click', function () {
const inputText = prompt('Введите текст')
linkElement.textContent = inputText
// preventDefault()
})

