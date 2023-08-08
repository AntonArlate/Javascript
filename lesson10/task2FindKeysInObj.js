// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

// const post = {
// author: "John", // вывести этот текст
// postId: 23,
// comments: [
// {
// userId: 10,
// userName: "Alex",
// text: "lorem ipsum",
// rating: {
// likes: 10,
// dislikes: 2, // вывести это число
// },
// },
// {
// userId: 5, // вывести это число
// userName: "Jane",
// text: "lorem ipsum 2", // вывести этот текст
// rating: {
// likes: 3,
// dislikes: 1,
// },
// },
// ],
// };

function task2() {
    // примечание: прямой доступ описан в комментариях

    const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2, // вывести это число
                },
            },
            {
                userId: 5, // вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", // вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1,
                },
            },
        ],
    };

    let field1;
    let field2;
    let field3;
    let field4;

    // первое поле это автор
    field1 = post.author;

    // последующие поля это параметры комментариев. Значит получаем к ним доступ
    const comments = post.comments
    // перебираем с каунтом
    for (let i = 0; i < comments.length; i++) {
        // в 1-ом комменте нам надо получить поле dislikes которое содержится в поле rating это будет вторым полем для ответа.
        if (i === 0) { field2 = comments[i].rating.dislikes }
        // прямой доступ будет таким: field2 = post.comments[0].rating.dislikes

        if (i === 1) {
            // во втором комменте field3 = post.comments[1].userId
            field3 = comments[i].userId
            // а также field4 = post.comments[1].text
            field4 = comments[i].text
        }
    }

    console.log(`author: ` + field1);
    console.log(`dislikes: ` + field2);
    console.log(`userId: ` + field3);
    console.log(`text: ` + field4);

    document.getElementById("result2").innerHTML = ``;
    document.getElementById("result2").innerHTML += `author: ` + field1 + `<br>`;
    document.getElementById("result2").innerHTML += `dislikes: ` + field2 + `<br>`;
    document.getElementById("result2").innerHTML += `userId: ` + field3 + `<br>`;
    document.getElementById("result2").innerHTML += `text: ` + field4 + `<br>`;
}