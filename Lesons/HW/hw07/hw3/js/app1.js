'use strict';

let a = parseFloat(prompt('Введите значение a', ' '));
let b = parseFloat(prompt('Введите значение b', ' '));
let x;

if(a > b){
    x = a + b / b * 4;
} else if (a === b) {
    x = 400;
} else {
    x = a - b + 2 / b * 4;
}
console.log(x);