"use strict";
const func = (n, m, ...l) => {
    if (typeof l === "undefined") {
        return n * m;
    }
    return n * m * l.reduce((acc, val) => acc * val, 1);
};
console.log(func(5, 6));
console.log(func(5, 6, 2, 3, 5));
const result = function fun(n) {
    return n;
};
