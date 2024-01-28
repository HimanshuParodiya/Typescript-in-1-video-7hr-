// Type Utility

//1) Partial<Type>
//2) Required<Type>
//3) ReadOnly<Type>
//4) Record<Keys, Type>
//5) Pick<Type, Keys>
//6) Omit<Type, Keys>
//7) Exclude<Type, ExcludedUnion>
//8) Extract<Type, Union>
//9) NonNuL<Type>
//10) Parameters<Type>
//11) ConstructorParameters<Type)
//12) ReturnType<Type>
//13) InstanceType<Type>


// -1)
//! Partial<Type>
// Koi bhi Type ki properties ko option bna leta h 
// it will create a optional copy of any type of type
// type User = {
//     name:string
//     email:string
// }
// type User2 = Partial<User>
// now User2 is
// type User2 = {
//     name?: string | undefined;
//     email?: string | undefined;
// } 


// -2)
//! Required<Type> 
// opposite to Partial
// type User = {
    // name?:string
    // email:string
// }
// type User2 = Required<User>
// now User2 is
// type User2 = {
//     name: string | undefined;
//     email: string | undefined;
// } 


// -3)
//! Readonly<Type> 
// we cant change anything which is inside of readonly
// type User = {
//     name?:string
//     email:string
// }
// const user:Readonly<User> = {
//     name:"Thomas",
//     email: "email@gmail.com",
// } 

// now user is not editable



// -4)
//! Pick <Type, Key> 
// interface OrderInfo {
//     readonly id:string
//     user:string
//     city:string
//     state:string
//     country:string
//     status:string
// }
// type shippingInfo = Pick<OrderInfo, "city"|"state"|"country"> 

// now shippingInfo consists of 
// type shippingInfo = {
//     city: string;
//     state: string;
//     country: string;
// }
// now user is not editable



// -5)
//! Omit <Type, Key> 
// opposite of pick 

// type ShippingInfo = {
//     city: string;
//     state: string;
//     country: string;
// }

// type Random = Omit<ShippingInfo,"country" >
// now Random consists of 
// type Random = {
//     city: string;
//     state: string;
// }
// now user is not editable
