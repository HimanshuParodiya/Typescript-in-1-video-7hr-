"use strict";
class Player {
    constructor(name, age) {
        this.getName = () => {
            return this.name;
        };
        this.getLevel = () => {
            if (this.level != "undefined") {
                return this.level;
            }
        };
        this.setName = (name) => { this.name = name; };
        this.id = String(Math.floor(Math.random() * 100));
        this.name = name;
        this.age = age;
    }
    // method 
    // setLevel = (level:string):void => {this.level = level}
    // setter    
    set setLevel(level) {
        this.level = level;
    }
}
class VideoGamePlayer extends Player {
    constructor(name, age, gameName) {
        super(name, age);
        this.setGameName = (gameName) => this.gameName = gameName;
        this.gameName = gameName;
    }
    //Method Syntax:
    // getGameName = ():string =>{
    //     return this.gameName
    // }
    // getter syntax
    get getGameName() {
        return this.gameName;
    }
}
const player1 = new Player("Thomas", 23);
console.log(player1);
console.log(player1.getName());
console.log(player1.setName("Tommy"));
console.log(player1);
console.log(player1.id);
// inheritance
const videoGamePlayer1 = new VideoGamePlayer("Mortal", 26, "BGMI");
console.log(videoGamePlayer1.getName());
// videoGamePlayer1.setLevel("Noob") // here setLevel was method so we call and pass the argument
videoGamePlayer1.setLevel = "Noob"; // here setLevel is a setter so we assign the string
// const introOfVideoGamePlayer1 = `${videoGamePlayer1.getName()} is a ${videoGamePlayer1.getLevel()} player of ${videoGamePlayer1.getGameName()}` // when we are using method we have to call it like this getGameName0()
const introOfVideoGamePlayer1 = `${videoGamePlayer1.getName()} is a ${videoGamePlayer1.getLevel()} player of ${videoGamePlayer1.getGameName}`; // when we are using getter function we don't have to call it like this getGameName()
console.log(introOfVideoGamePlayer1);
console.log(videoGamePlayer1.id);
class Product {
    constructor(name, price, stock) {
        this.id = String(Math.floor(Math.random() * 100));
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    set isOffer(offer) {
        this.offer = offer;
    }
}
const product1 = new Product("Iphone", 120000, 2);
product1.isOffer = true;
console.log(product1);
