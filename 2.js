/*Написать функцию, которая принимает на входе любое число (но не больше 1 000).
определяет, является ли оно простым, и выводит простое число или нет.
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.*/

function isNumberSimple(number){
    let divider = 0;
    for(i = 1; i <= number; i++){
        if(number%i == 0){
            divider++;
        }
    }
    if(divider>=3){
        console.log('Число составное')
    }
    else{
        console.log('Число простое')
    }
}
const userNumber = prompt('Введите число');
    (userNumber == 0) ? console.log('Число простое'):
    (userNumber == 1) ? console.log('Число простое'):
    (userNumber <=1000) ? isNumberSimple(userNumber):
    console.log('Данные неверны');
