function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`I'm a person, and my name is ${this.name}`);
    
}

var facundo = new Person("Facundo");

console.log(facundo);

// Inheritance is the ability to inject values to an object, with prototypes