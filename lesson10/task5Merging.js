// **Задание 5**
// Дано 2 массива 
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// ```


// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

function task5() {
    document.getElementById("result4").innerHTML = ``;

    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

    let obj = {};
    const map = new Map();

    let length = Math.min(en.length, ru.length);
    for (let i = 0; i < length; i++) {
        obj[en[i]] = ru[i];
        map.set(en[i], ru[i]);
    }

    // вывод map в консоль
    map.forEach((value, key) => {
        console.log(`Ключ: ${key}, Значение: ${value}`);
    });

    // вывод obj на страницу
    for (let key in obj) {
        document.getElementById("result5").innerHTML += key + ': ' + obj[key] + `<br>`;
    }
}