'use strict';

let from = 1;
let to = 10;
while (from<=to) {
    console.log(from++);
}
console.log('------------------------------------------');
let x;
do {

    x = parseFloat(prompt('Input x',''));
    if(isNaN(x)){
        alert('Input error!');
    }
}while (isNaN(x));

for(let from = 0; from <= to; from+=2) {
console.log(from);

}
console.log('------------------------------------------');
for(let a = 1; a<= 9; a++) {
    for (let b =2; b<=9; b++){
        console.log(a*b);
    }


}
while (true){
    let num = Math.round(Math.random()*10);
    console.log(num);
    if(num === 4){
        break;
    }
}
console.log('------------------------------------------');
for(let from = 0; from <= to; from++){
    if(from % 2 !==0){
        continue;
    }
    console.log(from);
}
//масив
let array  = [1, 2.3, [2, 4, 56], 4, true, 6, 'hello', 7, 8, 9];
console.log(array);
console.log(array.length);
console.log(array[2]);
//aray[2]= 'world';
//aray[9]= 'Test';
//aray[90]= '90';
array.push(45);
array.push(55);
let lastElement = array.pop();
let firstElement =  array.shift();
array.unshift(44444);
console.log(array, lastElement, firstElement);


let randomArray=[];
for (let i = 0; i<=100;i++){
    let num = Math.round(Math.random()*10);
}
console.log(randomArray);
let sum = 0;
for (let index in randomArray){
    sum += randomArray[index];
}
console.log(sum);
let sum1 =0;
for (let element of randomArray){
    sum1 += element;
}
console.log(sum1);


let matrix = [];
for(let i = 0; i < 10; i++){
    matrix[i]=[];
    for(let j = 0; j< 10; j++) {
        matrix[i] [j]= Math.round(Math.random()*10);
    }
}
console.log(matrix);