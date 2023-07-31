// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function task2() {
    const ndfl = 13;
    let yield;

    const ndflCalc = (inValue) => inValue * ((100 - ndfl) / 100);

    yield = Number(prompt("Введите число"));

    if (isNaN(yield)) {
        console.log(`Не верный ввод`);
        document.getElementById("result2").innerHTML = `Не верный ввод`;
    } else {
        console.log(`Размер заработной платы за вычетом налогов равен ${ndflCalc(yield)}`);
        document.getElementById("result2").innerHTML = `Размер заработной платы за вычетом налогов равен ${ndflCalc(yield)}`;
    }
}