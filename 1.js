/*В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название,
вызовите функцию, проанализируйте синтаксис.*/

function checkParity(){
    let arr = [1,2,3,4,5,6,7,8,'vasya',1,2,523,false];
    let evenCounter = 0;
    let oddCounter = 0;
    for(i=0;i<arr.length;i++){
    if(typeof arr[i] == 'number' && !isNaN(arr[i])){
        if(arr[i]%2){
            evenCounter++;
        }
        else{
            oddCounter++;
        }
    }
}
    console.log(evenCounter,oddCounter)
}

checkParity();