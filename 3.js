/*Написать функцию, которая принимает число как аргумент и возвращает функцию,
 которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.*/

function getNumber(a){
    return function(b){
        return a+b;
    }
}
let a = prompt('Введите первое число');
let b = prompt('Введите второе число');
let resultFunc = getNumber(Number(a));
console.log(resultFunc(Number(b)));
