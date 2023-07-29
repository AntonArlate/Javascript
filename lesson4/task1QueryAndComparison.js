// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

function task1() {
    let num1;
    let num2;

    num1 = prompt(`Введите "num1"`);
    if (num1 <= 1) {
        console.log(`${num1} <= 1 : true`)
        document.getElementById("result1").innerHTML = num1 + " <= 1 : true";
    } else {
        console.log(`${num1} <= 1 : false`)
        document.getElementById("result1").innerHTML = num1 + " <= 1 : false";
    }

    num2 = prompt(`Введите "num2"`);
    if (num2 >= 3) {
        console.log(`${num2} >= 3 : true`)
        document.getElementById("result1").innerHTML += "<br>" + num2 + " >= 3 : true";
    } else {
        console.log(`${num2} >= 3 : false`)
        document.getElementById("result1").innerHTML += "<br>" + num2 + " >= 3 : false";
    }

}