// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function task1() {
    const testNum1 = 2;
    const testNum2 = 3;

    const cube = (num) => num * num * num; // функция можно также испльзовать оператор возведения "num ** 3"

    console.log('Result: 2\u005E3 + 3\u005E3 = ' + (cube(testNum1) + cube(testNum2)));
    document.getElementById("result1").innerHTML = 'Result: 2\u005E3 + 3\u005E3 = ' + (cube(testNum1) + cube(testNum2));
}