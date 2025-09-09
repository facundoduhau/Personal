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
// These just make the methods inaccesible through new objects
// Meaning the only way to access them, is through the object it was declared in
// You can't use extensions

// Getters and Setters
// Allow for more control