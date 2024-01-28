// Type Assertion

// const button = document.getElementById("btn") // right now typescript is saying that the type of the button is either HTMLElement or null so
// button.onclick // it is saying that button can be null so use button?.onclick to be in safe side
// button?.onclick

// so with the type Assertion we are telling typescript that we know that the type of the button will always be HTMLElement 
// So let's see how we gonna tell them 

//There are three ways for type assertion
//1st const button =<HTMLElement> document.getElementById("btn")
//2nd const button = document.getElementById("btn") as HTMLElement
//3rd const button = document.getElementById("btn")! // here with the help of ! we are saying that button is not null


const button = <HTMLElement> document.getElementById("btn") 



// now lets work with form

// const form = document.getElementById("formId") // we are still getting HTMLElement or null 
const form = document.getElementById("formId") as HTMLFormElement // Here we are telling TS that is element is as form element
const formInput = document.querySelector("form > input") as HTMLInputElement 



form.onsubmit = (e)=>{
    e.preventDefault()
    // console.log(formInput.value);
    const h1 = document.createElement("h1")
    const value = +formInput.value;
    const body = document.querySelector("body")!
    h1.textContent = String(value + 20);
    body.append(h1)
    
}
