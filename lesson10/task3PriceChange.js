// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

// const products = [
// {
// id: 3,
// price: 200,
// },
// {
// id: 4,
// price: 900,
// },
// {
// id: 1,
// price: 1000,
// },
// ];

function task3() {

    document.getElementById("result3").innerHTML = ``;

    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

    products.forEach(product => {
        let resultString = `product ${product.id}; price: ${product.price}`
        console.log(resultString);

        product.price = product.price * ((100 - 15) / 100);

        console.log(`changed: ` + product.price);

        document.getElementById("result3").innerHTML += resultString + ` changed: ${product.price}` + `<br>`;
    });
} 