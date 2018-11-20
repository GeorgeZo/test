'use strict';

let x = parseFloat(prompt('Введите x', ''));
let y = parseFloat(prompt('Введите y', ''));

if(y >= -1 && (x <= 0 && y <= x || x > 0 && y <= -x) || y <= 1 && (x <= 0 && y >= -x || x > 0 && y >= x))   {
    alert('Точка попадает в область');
} else {
    alert('Точка НЕ попадает в область');
}