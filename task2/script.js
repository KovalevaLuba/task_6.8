const consoleElement = document.querySelector('#consoleLog')
const alertElement = document.querySelector('#alert')
const promptElement = document.querySelector('#prompt')

consoleElement.addEventListener ('click', () => {
    alert('Этот метод выводит сообщения в консоль')
})

alertElement.addEventListener ('click', () => {
    alert('Этот метод выводит сообщения для пользователя в диалоговое окно')
})

promptElement.addEventListener ('click', () => {
    alert('Этот метод выводит окно для ввода информации пользователем')
})