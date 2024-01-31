// const func = (n:number) => {
//     return n
// }

// const answer = func(20)
// answer.toFixed() // all number's methods

// in above code we know that func will take an argument of data type number what if we don't know
// i mean i want if i pass string to func so answer will have all the string methods same with number and array
// Let's see how we can achieve this

// const func = <CustomType> (n:CustomType):CustomType => {
//     return n
// }

// const answer = func(20);
// const answer2 = func("Hello");
// const answer3 = func(true);
// const answer4 = func([2,3,4,5]);

// answer.toExponential() // how customType Change according to argument
// answer2.slice // how customType Change according to argument
// answer3.valueOf() // how customType Change according to argument
// answer4.pop() // how customType Change according to argument

// in industry most of the people use <T> instead of <CustomType>

// type Person = {
//     name:string,
//     age:number
// }

// const person1:Person = {
//     name:"Thomas",
//     age:23
// }

// const ans = func(person1)
// ------------------------------------------------------------------

// const func =<T,U> (n:T, o:U) =>{
//     return {n,o}
// }
// or
// const func =<T,U> (n:T, o:U) : {n:T,o:U} =>{ // both are same
//     return {n,o}
// }

// const ans = func<number,string>(5,"BleakMidWinter")
// console.log(ans); // output {n: 5, o: 'BleakMidWinter'}

// // ------------------------------------------------------------------
// type Person = {
//   name: string;
//   age: number;
// };

// type Person2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user1: Person = {
//   name: "Thomas",
//   age: 25,
// };

// const user2: Person2 = {
//   name: "Thomas",
//   age: 25,
//   email: "peakyBlinder@Shelby.com",
// };

// const returnUsers = <T, U extends T>(
//   firstUser: T,
//   secondUser: U
// ): { firstUser: T; secondUser: U } => {
//   return { firstUser, secondUser };
// };
// const bothUser = returnUsers<Person, Person2>(user1, user2);

// console.log(bothUser.firstUser.name);
// console.log(bothUser.secondUser.email);

// ------------------------------------------------------------------

type Person = {
  name: string;
  age: number;
};

const users: Person[] = [
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

const filterByPersons = <T, U extends keyof T>(
  arr: T[],
  property: U,
  value: T[U]
) => {
  return arr.filter((eachPerson) => eachPerson[property] == value);
};

const filterByPersonsName = filterByPersons(users, "name", "Thomas Shelby");
const filterByPersonsAge = filterByPersons(users, "age", 27);
console.log(filterByPersonsName);
console.log(filterByPersonsAge);

// arr: T[]: This parameter arr is an array of type T, where T is a generic type. It represents the array of objects you want to filter.

// property: U: This parameter property represents the property (or key) of the objects in the array that you want to filter on. The type U is constrained to be a key of the type T.

// value: T[U]: This parameter value represents the expected value of the specified property. The type T[U] ensures that value is of the same type as the property being filtered.
