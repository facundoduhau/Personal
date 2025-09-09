// Prototypes enable copying a format and producing it multiple times

// You first create a class, and produce objects/instances of the class
// Class = Blueprint

// JavaScript is PROTOTYPE BASED, not CLASS-OBJECT BASED
// It supports every class-object based programming stuff though...

// Remember: Objects allow for stuff like push, pop, map
// It allows stuff like myObject.forEach()
// It means you can "manipulate" these objects

// Ex

var computer = {
    cpu: 12,
};

var lenovo = {
    screen: 'HD',
};

console.log(`computer`, computer.__proto__);

// Computer Proto shows available mainuplation for the object (in this case, the computer object)
// When you want to ACCESS an object, use dunder-proto (that's how it's called)

// dunder-proto enables enjacting keywords to another objects

lenovo = {
    screen: 'HD',
    __proto__: computer,
}

// Better alternative

let car = {
    tyres: 4,
}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla, car);

console.log(`tesla`, Object.getPrototypeOf(tesla));