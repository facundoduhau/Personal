// Encapsulation
// It essentially is restricting access of a keyword outside the class
// If you're IN the class, you can still access it

class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount();

console.log(account.getBalance());

// Abstraction
// "Hides" unwanted info
// Simplifies processes for easier interpreting
// Helps with debugging

class myProcesses {
    start(){
        // Something happens
        // Something else happens
        // Super ultra complex stuff
        return `Starting process...`
    }
    finishing(){
        // Some more stuff happens
        // Wow stuff really is happening
        // Yes, very wow
        return `Tidying up...`
    }
}

let myWork = new myProcesses();

console.log(myWork.start());
console.log(myWork.finishing());

// Polymorphism
// Something that can take multiple "forms"

class Bird{
    fly(){
        return `Birds can fly, obviously`
    }
}

class Penguin extends Bird{
    fly(){
        return `Sadly, penguins can't fly (yet)`;
    }
}

var myBird = new Bird()
var myPenguin = new Penguin()

// These two logs, return different texts, even though `fly()` is the same method for both classes
console.log(myBird.fly());
console.log(myPenguin.fly());

// Static methods
// Defines to class itself, not objects created FROM the class
// The class owns it

class MathUtil{
    static PI = 3.141592;

    constructor(utils){
        this.utils = utils;
    }
}

var newUtil = new MathUtil(5);

console.log(newUtil.PI); // Returns UNDEFINED (It's class defined)
console.log(newUtil.utils); // Returns 5 (It's from the object)

// Getters and Setters
// Allow for more control
// Getters are special methods that make properties readable
// Setteres are special methods that make a property writtable
// Allow validation and modification of values when reading/writing properties

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; // using "_" before a property name, is the standard for naming private properties
        }
        else{
            console.error("Width must be a positive number")
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return this._width
    }

    get height(){
        return this._height
    }
}

const newRec = new Rectangle(-9999, "pizza")
console.log(newRec); // Shows item info

console.log(newRec.height); // Not readable
console.log(newRec.width); // Not readable

const readableRectangle = new Rectangle(20, 10)

console.log(readableRectangle.height); // Readable
console.log(readableRectangle.width); // Readable

