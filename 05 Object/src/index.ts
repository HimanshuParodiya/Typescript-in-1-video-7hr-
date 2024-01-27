// type userType ={
//     userName:string,
//     userSureName:string,
//     userAge:number,
//     isPrivateAccount?:boolean,// this ? means this parameter is optional
// }

// same with interface so what is the difference between type and interface
type userDetails = (userName:string,userAge:number) => void
interface userType {
    userName:string;
    userSureName:string;
    userAge:number;
    isPrivateAccount?:boolean;// this ? means this parameter is optional
    details: userDetails;
}

interface newUserDetails extends userType{
    gangStar?:boolean;
}

const user:userType = {
    userName:"Thomas",
    userSureName:"Shelby",
    userAge:25,
    isPrivateAccount:true,
    details:(userName,userAge) =>{
        console.log(`User: ${userName}, Age: ${userAge}`);
    }
    
}

const user2:userType = {
    userName:"John",
    userSureName:"Shelby",
    userAge:23,
    isPrivateAccount:false,
    details:(userName,userAge) =>{
        console.log(`User: ${userName}, Age: ${userAge}`);
    }
}


const user3:newUserDetails = {
    userName:"John",
    userSureName:"Shelby",
    userAge:23,
    isPrivateAccount:false,
    details:(userName,userAge) =>{
        console.log(`User: ${userName}, Age: ${userAge}`);
    }
}

user.details("Jay",20)













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
