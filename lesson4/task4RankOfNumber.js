/*
Задание 4
Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
(Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: пользователь всегда вводит корректное положительное целое число.
*/

function task4() {
    let num;
    let rank;

    num = prompt(`Введите число`);

    // обнуляем содержимое строки
    document.getElementById("result4").innerHTML = "";

    rank = 0;
    while (num >= 1) {
        rank += 1;

        // в соответсвии с заданием выделяются единицы, десятки и сотни. Для полного соответствия можно через условие отсечь дальнейший вывод
        console.log(`разряд ${(rank == 1) ? "единиц" :
            (rank == 2) ? "десятков" :
                (rank == 3) ? "сотен" :
                    rank
            }: ${num % 10}`)

        // мой вариант который просто нумерует разряды. Вывод на страницу html
        document.getElementById("result4").innerHTML += "разряд " + rank + ": " + (num % 10) + "<br>";

        num = Math.trunc(num / 10);
        // немного не понял разницу между функциями trunc и floor
    }
}