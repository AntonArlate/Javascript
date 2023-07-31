// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function task3() {
    const userIn1 = Number(prompt("Введите число 1"));
    const userIn2 = Number(prompt("Введите число 2"));
    const userIn3 = Number(prompt("Введите число 3"));

    const getMaxNumber = (a, b, c) => {
        let max = a;
        if (b > max) max = b;
        if (c > max) max = c;
        return max;
    }

    // всётаки обычная запись мне привычней
    // function getMaxNumber(a, b, c) {
    // }

    console.log(`Из чисел ${userIn1}, ${userIn2}, ${userIn3} наибольшее: ${getMaxNumber(userIn1, userIn2, userIn3)}`);
    document.getElementById("result3").innerHTML = `Из чисел ${userIn1}, ${userIn2}, ${userIn3} наибольшее: ${getMaxNumber(userIn1, userIn2, userIn3)}`;
}