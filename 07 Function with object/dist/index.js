"use strict";
const myProduct = {
    name: "Iphone",
    price: 20000,
    img: "image.com",
    inStock: true
};
const getData = (product) => {
    console.log(product.name);
};
getData(myProduct);
