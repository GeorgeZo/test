'use strict';

let auth = false;
if (auth) {
 console.log('Auth');
} else {
    console.log('Not Auth');
}


let age = 19;

if(age >=18) {
    console.log('Welcome!');

}else {
    console.log('Access Denied');
}

if (age === 19) {

}
if (age !== 18) {
    console.log('Not',age);
}

if (!!age) {

}


if(age >=18 && age < 21){
    console.log ('Можно продать пиво!');
    if(age === 18) {
        console.log ('Проверить документы');
        let documents = true;
        if (documents) {
            console.log ('Можно продать пиво!');
        }
    }
}else if(age>=21){
    console.log('можно продать пиво и водку!');
}

if (age === 18 || age === 21) {
    console.log('Проверить документы!');
}

let dayNum = 3;
switch (dayNum) {
    case  1:
    console.log('Понедельник');
    break;
    case  2:
        console.log('Вторник');
        break;
    case  3:
        console.log('Среда');
        break;
    case  4:
        console.log('Четверг');
        break;
    case  5:
        console.log('Пятница');
        break;
    case  6:
        console.log('Суббота');
        break;
    case  7:
        console.log('Воскресение');
        break;
    default: console.log('Такого дня не существует!')

}

let message = '';
if (age >=18) {
else
    {
        message = 'Нельзя продать пиво'
    }
    console.log(message);
    let msg = (age >= 18) ? age < 21 ? 'можно продать пиво' : 'Нельзя продать пиво';
    console.log(msg);
}