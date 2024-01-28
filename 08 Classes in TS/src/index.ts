class Player {
    readonly id:string
    private  name :string // only accessible inside the Player class
    public age:number // accessible from anywhere
    protected level?:string // accessible from inheritance or Player class

    constructor(name:string,age:number){
        this.id = String(Math.floor(Math.random()*100))
        this.name = name
        this.age = age
    }

    getName = ():string =>{
       return this.name
    }
    getLevel = ():string|void =>{
        if (this.level != "undefined") {
            return this.level
        }
    }

    setName = (name:string):void => {this.name = name}

    // method 
    // setLevel = (level:string):void => {this.level = level}

    // setter    
    set setLevel(level : string) {
        this.level = level;
    }
    

}

class VideoGamePlayer extends Player{
    private gameName:string

    constructor(name:string, age:number,gameName:string){
        super(name,age)
        this.gameName = gameName
    }

    //Method Syntax:
    // getGameName = ():string =>{
    //     return this.gameName
    // }

    // getter syntax
    get getGameName() : string {
        return this.gameName 
    }
     
    setGameName = (gameName:string) => this.gameName = gameName

}

const player1 = new Player("Thomas",23)
console.log(player1);
console.log(player1.getName());
console.log(player1.setName("Tommy"));
console.log(player1);
console.log(player1.id );



// inheritance
const videoGamePlayer1 = new VideoGamePlayer("Mortal",26,"BGMI")
console.log(videoGamePlayer1.getName());
// videoGamePlayer1.setLevel("Noob") // here setLevel was method so we call and pass the argument
videoGamePlayer1.setLevel = "Noob" // here setLevel is a setter so we assign the string
// const introOfVideoGamePlayer1 = `${videoGamePlayer1.getName()} is a ${videoGamePlayer1.getLevel()} player of ${videoGamePlayer1.getGameName()}` // when we are using method we have to call it like this getGameName0()
const introOfVideoGamePlayer1 = `${videoGamePlayer1.getName()} is a ${videoGamePlayer1.getLevel()} player of ${videoGamePlayer1.getGameName}` // when we are using getter function we don't have to call it like this getGameName()
console.log(introOfVideoGamePlayer1);
console.log(videoGamePlayer1.id);




// Now Let's use classes with the interface

interface ProductType{ // specifies the expected structure of a class
    id:string,
    name:string
    price:number
    stock:number
    offer?:boolean
}

class Product implements ProductType{
    
    
    public id:string =  String(Math.floor(Math.random()*100));
    public name:string
    public price:number
    public stock:number
    public offer?:boolean 

    constructor(name:string,price:number,stock:number){
        this.name = name
        this.price = price
        this.stock = stock
    }

    
    public set isOffer(offer : boolean) {
        this.offer = offer;
    }
    

}

const product1 = new Product("Iphone",120000,2)
product1.isOffer = true
console.log(product1);
