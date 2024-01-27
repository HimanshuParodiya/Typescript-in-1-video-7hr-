interface Product{
        name:string,
        price:number,
        img:string,
        inStock:boolean
    
}

type getDataType = (product:Product)=> void; // this function taking an object and returning void


const myProduct:Product = {
    name:"Iphone",
    price:20000,
    img:"image.com",
    inStock:true
}

const getData:getDataType = (product) =>{
    console.log(product.name);
}

getData(myProduct)