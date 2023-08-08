// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// const numbers = {
// keyin1: 1,
// keyin2: 2,
// keyin3: 3,
// keyin4: 4,
// keyin5: 5,
// keyin6: 6,
// keyin7: 7,
// }

function task1() {
    document.getElementById("result1").innerHTML = ``;

    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
    }

    // нас интересуют значения полей, получим их при помощи Object.values()
    const values = Object.values(numbers);
    // можно получить прямо в for. Для примера не буду использовать полученную переменную values
    for (let value of Object.values(numbers)) {
        if (value >= 3) {
            let result = value;
            // Я не буду выводить ответ. Попробуем сохранить ключи
        }
    }

    for (let [key, value] of Object.entries(numbers)) {
        if (value >= 3) {
            resultString = `${key}: ${value} >= 3`
            console.log(resultString);
            document.getElementById("result1").innerHTML += resultString + `<br>`;
        }
    }
} 