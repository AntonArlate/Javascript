// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function task4() {

    // функции калькулятора
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a > b ? a - b : b - a;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    // генерация строки с ответом
    const resultString = (num1, num2, chrOperation, resultIn) => `${num1} ${chrOperation} ${num2} = ${resultIn}`;

    // получаем настройку
    const radios = document.getElementsByName('calcSet');
    let selectedValue;
    // на случай если html страница не подготовлена (на ней нет элементов с нужным именем) выполним как "all"
    if (radios.length > 0) {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue = radios[i].value;
                break;
            }
        }
    } else {
        selectedValue = "all";
    }

    // другие переменные
    let result;
    let resultOut;

    // запрашиваем числа
    const userIn1 = Number(prompt("Введите число 1"));
    const userIn2 = Number(prompt("Введите число 2"));

    // если всё нормально очищаем блок для ответов
    document.getElementById("result4").innerHTML = "";

    // далее идут проверки if для кнопки режима
    if (selectedValue === 'sum' || selectedValue === 'all') {
        result = sum(userIn1, userIn2); // это вызов функции
        resultOut = resultString(userIn1, userIn2, '+', result) // генерация строки с ответом
        console.log(resultOut); // вывод ответа в консоль
        document.getElementById("result4").innerHTML += resultOut + '<br>';
    }

    if (selectedValue === 'subtract' || selectedValue === 'all') {
        result = subtract(userIn1, userIn2);
        resultOut = resultString(userIn1, userIn2, '-', result)
        console.log(resultOut);
        document.getElementById("result4").innerHTML += resultOut + '<br>';
    }

    if (selectedValue === 'multiply' || selectedValue === 'all') {
        result = multiply(userIn1, userIn2);
        resultOut = resultString(userIn1, userIn2, '*', result)
        console.log(resultOut);
        document.getElementById("result4").innerHTML += resultOut + '<br>';
    }

    if (selectedValue === 'divide' || selectedValue === 'all') {
        result = divide(userIn1, userIn2);
        resultOut = resultString(userIn1, userIn2, '/', result)
        console.log(resultOut);
        document.getElementById("result4").innerHTML += resultOut + '<br>';
    }
}