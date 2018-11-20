'use strict';

let x = parseFloat(prompt('Введите x', ''));
let y = parseFloat(prompt('Введите y', ''));

if( y >= 0 && (x <= 0 && y <= x + 4 || x > 0 && y <= -x + 4)) {
    alert('Точка попадает в область');
} else {
    alert('Точка НЕ попадает в область');
}