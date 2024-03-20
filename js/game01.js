'use strict'

let number, random = Math.floor(Math.random() * 100);

while (number = prompt('Введите число от 1 до 100:')) {
    if (isNaN(number))
        alert('Введите число!');
    else if (number > random)
        alert('Меньше!');
    else if (number < random)
        alert('Больше!');
    else if (typeof (number.valueOf) == 'number')
        alert('Введи число!');
    else if (number == random) {
        alert('Правильно!');
        break;
    }
}