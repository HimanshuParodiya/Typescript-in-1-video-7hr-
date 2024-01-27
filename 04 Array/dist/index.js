"use strict";
// const getUserDetails = (userName:string, userAge:number):string => {
//     let userDetails = `User Name is ${userName} and age is ${userAge} `
//     return userDetails;
// }
const getUserDetails = (userName, userAge) => {
    let userDetails = `User Name is ${userName} and age is ${userAge} `;
    return userDetails;
};
console.log(getUserDetails("Thomas", 23));
// now let's start with Array
const numberArr = [1, 2, 3, 4, 5]; // this array can only have numbers in it
const stringArr = ['a', 'b', 'c', 'd']; // this array can only have string in it
// there is another way to create array with predefined datatype
const myArr = [1, 4, 5, 6, 7];
const myArr2 = [1, 4, 'a', 'c'];
// both ways are valid : number or Array<number>
// fixed size array = tuple
const tupleArray = [2, 2, 3,]; // it has fix size of 3 
