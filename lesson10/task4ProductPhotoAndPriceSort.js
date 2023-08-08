/*
Задание 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

```
const products = [
{
id: 3,
price: 127,
photos: [
"1.jpg",
"2.jpg",
],
},
{
id: 5,
price: 499,
photos: [],
},
{
id: 10,
price: 26,
photos: [
"3.jpg",
],
},
{
id: 8,
price: 78,
},
];

*/

function task4() {
    document.getElementById("result4").innerHTML = ``;

    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ],
        },
        {
            id: 5,
            price: 499,
            photos: [],
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg",
            ],
        },
        {
            id: 8,
            price: 78,
        },
    ];

    const filteredProducts = products.filter((product) => product.photos && product.photos.length > 0);
    filteredProducts.forEach((product) => {
        let resultString = `Product ID: ${product.id}, Product Price: ${product.price}, Product Photos: ${product.photos}`;
        console.log(resultString);
        document.getElementById("result4").innerHTML += resultString + `<br>`;
    });
}