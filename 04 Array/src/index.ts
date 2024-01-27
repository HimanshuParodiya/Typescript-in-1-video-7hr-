// const getUserDetails = (userName:string, userAge:number):string => {
//     let userDetails = `User Name is ${userName} and age is ${userAge} `
//     return userDetails;
// }

// console.log(getUserDetails("Thomas",23));

// in the code we have so many parameter and their datatype so to get rid of that we can use Type Alias

type userData = (userName:string, userAge:number) => string 

const getUserDetails:userData = (userName, userAge) => { // now our parameter are looking good
    let userDetails = `User Name is ${userName} and age is ${userAge} `
    return userDetails;
}

console.log(getUserDetails("Thomas",23));


// now let's start with Array

const numberArr:number[] = [1,2,3,4,5] // this array can only have numbers in it
const stringArr:string[] = ['a','b','c','d'] // this array can only have string in it

// there is another way to create array with predefined datatype
const myArr:Array<number> = [1,4,5,6,7]
const myArr2:Array<number|string > = [1,4,'a','c']


// both ways are valid : number or Array<number>



// fixed size array = tuple
const tupleArray:[number,number,number] = [2,2,3,] // it has fix size of 3 