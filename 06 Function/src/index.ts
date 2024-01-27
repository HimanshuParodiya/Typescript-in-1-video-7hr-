type funcType = (n:number, m:number, ...l:number[]) => number

const func:funcType = (n, m,...l) =>{  // here we know that there will be at least 2 number but there can be more then 2 arguments so we are using rest operator  
    if (typeof l === "undefined") {
        return n*m
    }
    return n*m*l.reduce((acc, val) => acc * val, 1)
}

console.log(func(5,6));
console.log(func(5,6,2,3,5));


type resultFunc = (n:number) => number
const result:resultFunc = function fun(n) {
    return n;
}