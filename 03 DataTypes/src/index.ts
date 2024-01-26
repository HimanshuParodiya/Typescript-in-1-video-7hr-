let a = 25;

// a = "sad" // error //Type 'string' is not assignable to type 'number'. // but in .js file it will work fine and if we uncomment this we will see sad string in output
console.log(a);

// let name = "Jay" // name is predefined in .js 

// we can explicitly the datatype

let useName:string = "Thomas"
let userAge =<number> 20; // another way to declare datatype
let isActiveUser:boolean = false;
let anyVariable:any = 23; // it can be string, number, or undefined anything
let userSurname:string|number = "Shelby" // it can be number or string


// Let's work with function

const getDetails = (userName:string,userAge:number):string|void =>{ // this function either can return string or void(nothing just log) 
    console.log(`User name is ${userName} and age is ${userAge}`); 
    let userFullName = `${userName} ${userAge}`
    return userFullName
}

// Question 
// What if we don't know the userName or userAge will be number or string than how would be we handle them and also we can use any datatype 
// Ans so for that we have something called generic which we will cover later 