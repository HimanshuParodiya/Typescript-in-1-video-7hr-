"use strict";
// type userType ={
//     userName:string,
//     userSureName:string,
//     userAge:number,
//     isPrivateAccount?:boolean,// this ? means this parameter is optional
// }
const user = {
    userName: "Thomas",
    userSureName: "Shelby",
    userAge: 25,
    isPrivateAccount: true,
    details: (userName, userAge) => {
        console.log(`User: ${userName}, Age: ${userAge}`);
    }
};
const user2 = {
    userName: "John",
    userSureName: "Shelby",
    userAge: 23,
    isPrivateAccount: false,
    details: (userName, userAge) => {
        console.log(`User: ${userName}, Age: ${userAge}`);
    }
};
user.details("Jay", 20);
// interface UserType {
//     userName: string;
//     userSureName: string;
//     userAge: number;
//     isPrivateAccount?: boolean;
//     details?: function;
// }
// const user: UserType = {
//     userName: "Thomas",
//     userSureName: "Shelby",
//     userAge: 25,
//     isPrivateAccount: true,
//     details: function () {
//         console.log(`User: ${this.userName}, Age: ${this.userAge}`);
//     }
// };
// // Call the details function
// if (user.details) {
//     user.details();
// }
