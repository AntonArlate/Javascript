// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function task1() {
    let resultString;
    document.getElementById("result1").innerHTML = ``;

    for (let i = 0; i <= 10; i++) {
        if (i % 2) {
            resultString = `${i} - нечетное число`;
        } else {
            if (i === 0) { resultString = `${i} - это ноль` }
            else { resultString = `${i} - четное число` };
        };

        console.log(resultString);
        document.getElementById("result1").innerHTML += resultString + `<br>`;

    }
} 