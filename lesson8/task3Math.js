// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function task3() {
    let resultString;
    document.getElementById("result3").innerHTML = ``;

    // создаём массив
    const arr = [];
    for (let i = 1; i <= 5; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }

    // вычисляем сумму
    // с функциями map() и reduce() применяемыми к итерируемым объектам я знаком по питону, решил просто попробовать их реализацию здесь
    const sum = arr.reduce(function (sum, num) { return sum + num });

    // вычисляем минимум
    let min = arr[0];
    min = arr.reduce(function (min, num) {
        if (min > num) { return num }
        else { return min }
    });

    // ищем число 3
    const includeResult = arr.includes(3);

    console.log(`arr: ` + arr);
    console.log(`sum: ` + sum);
    console.log(`min: ` + min);
    console.log(`include 3: ` + includeResult);

    document.getElementById("result3").innerHTML += `arr: ` + arr + `<br>`;
    document.getElementById("result3").innerHTML += `sum: ` + sum + `<br>`;
    document.getElementById("result3").innerHTML += `min: ` + min + `<br>`;
    document.getElementById("result3").innerHTML += `include 3: ` + includeResult + `<br>`;

} 