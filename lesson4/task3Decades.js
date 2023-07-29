// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

function task3() {
    const day = Math.floor(Math.random() * 31) + 1;

    // if (Math.trunc(day / 10) === 0) {
    //     console.log(`${day} is 1 decade`)
    //     document.getElementById("result3").innerHTML = day + " is 1 decade";

    // } else if (Math.trunc(day / 10) === 1) {
    //     console.log(`${day} is 2 decade`)
    //     document.getElementById("result3").innerHTML = day + " is 2 decade";
    // } else {
    //     console.log(`${day} is 3 decade`)
    //     document.getElementById("result3").innerHTML = day + " is 3 decade";
    // }

    // переделано так как вероятно задача урока научиться использовать оператор &&

    if (day >= 1 && day <= 10) {
        console.log(`${day} is in the 1 decade`);
        document.getElementById("result3").innerHTML = day + " is in the 1 decade";
    } else {
        if (day >= 11 && day <= 20) {
            console.log(`${day} is in the 2 decade`);
            document.getElementById("result3").innerHTML = day + " is in the 2 decade";
        } else {
            console.log(`${day} is in the 3 decade`);
            document.getElementById("result3").innerHTML = day + " is in the 3 decade";
        }
    }
}