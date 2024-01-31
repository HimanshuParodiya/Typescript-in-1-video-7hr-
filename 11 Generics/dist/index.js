"use strict";
// const func = (n:number) => {
//     return n
// }
const users = [
    {
        name: "Thomas Shelby",
        age: 25,
    },
    {
        name: "Auther Shelby",
        age: 27,
    },
    {
        name: "John Shelby",
        age: 22,
    },
    {
        name: "Finn Shelby",
        age: 20,
    },
];
const filterByPersons = (arr, property, value) => {
    return arr.filter((eachPerson) => eachPerson[property] == value);
};
const filterByPersonsName = filterByPersons(users, "name", "Thomas Shelby");
const filterByPersonsAge = filterByPersons(users, "age", 27);
console.log(filterByPersonsName);
console.log(filterByPersonsAge);
// arr: T[]: This parameter arr is an array of type T, where T is a generic type. It represents the array of objects you want to filter.
// property: U: This parameter property represents the property (or key) of the objects in the array that you want to filter on. The type U is constrained to be a key of the type T.
// value: T[U]: This parameter value represents the expected value of the specified property. The type T[U] ensures that value is of the same type as the property being filtered.
