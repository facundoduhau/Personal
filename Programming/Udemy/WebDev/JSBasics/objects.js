// Objects differ from variables

// Arrays store data values next to each other in the memory.
const myArr = [1, 2, 3, 4];
console.log("Type of myArr:", typeof(myArr));

// Plain objects are used with key names.

var car = {
    name: "Corolla",
    year: 1998,
    status: "parked",
};

console.log("Type of car:", typeof(car));

// new statement

var objNumber = new Number(120);

console.log("This number is an:", typeof(objNumber), ", that logs:", objNumber);

// Symbols are objects which return UNIQUE types, meaning, altough one symbol can have the exact same
// value as another one, in essence they're different.

var symbol1 = Symbol(5);

var symbol2 = Symbol(5);

console.log("Are these two symbols the same?", symbol1 == symbol2);
