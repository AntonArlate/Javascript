// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

function task2() {

    let resultString;

    const arr = [1, 2, 3, 4, 5, 6, 7];
    const arr2 = arr.slice();
    arr2.splice(3, 2);
    // копируем массив slice. затем уираем лишнее splice.
    // если исходны массив не нужен, можно сразу к нему применить splice

    console.log(`arr: ` + arr);
    console.log(`arr2: ` + arr2);
    document.getElementById("result2").innerHTML = `arr: ` + arr + `<br>`;
    document.getElementById("result2").innerHTML += `const arr2 = arr.slice(); <br>
    arr2.splice(3, 2);<br>`;
    document.getElementById("result2").innerHTML += `arr2: ` + arr2 + `<br>`;

}