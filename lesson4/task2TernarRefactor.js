// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

function task2() {
    let test = true;
    if (test === true) {
        console.log('+++');
    } else {
        console.log('---');
    }

    // решение
    test === true ? console.log('refactor +++') : console.log('refactor ---');

    document.getElementById("result2").innerHTML = "test === true ? console.log('refactor +++') : console.log('refactor ---');" + "<br>result: " + ((test === true) ? '+++' : '---');
}