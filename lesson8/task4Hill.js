// Задание 4
// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

function task4() {
    let resultString = ``;
    document.getElementById("result4").innerHTML = ``;

    for (let i = 1; i <= 20; i++) {
        resultString += `x`;

        console.log(resultString);
        document.getElementById("result4").innerHTML += resultString + `<br>`;
    }
}