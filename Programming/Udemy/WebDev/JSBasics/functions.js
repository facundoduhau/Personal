// Functions include:

// Function keyword

// Function name

// Parameters and/or placeholder

// Code to be executed

// Ex (1)
// Normal function

function makeTea(typeOfTea){
    return console.log("I'm making", typeOfTea);
};

currentTea = "Green tea"

makeTea(currentTea);

// Ex (2)
// Create a function named orderTea that takes one parameter, 'teaType'.
// Inside this function create another function named "confirmedOrder".
// "confirmedOrder" should return a message saying "Order confirmed for 'teaType'".
// Call confirmedOrder from within orderTea and return the result.

function orderTea(){
    function confirmedOrder(teaType){
        return console.log("Order confirmed for", teaType);
    }
    return confirmedOrder("apple tea");
};

orderTea();

// Ex (3)
// Create an arrow function

const myArrow = (price, quantity) => {
    return console.log(price * quantity);
}

myArrow(5, 20);

// Ok so what are they for? If it's creating a function, just like function name(){}
// Well, there are some differences, but the main ones are
// (1) CONTEXT / THIS
// (2) Easier reading
// (3) using const for name declaration, so can't have syntaxis problems later

// What is "context/this" ?
// It's the ability to pass on some values
// Later it will be used in some core examples

// Ex (4)
// Higher order functions
// Write a function that takes another function as a parameter, and calls it with an argument.
// Return the result of calling it.

function createTeaMaker(){
    return function myFunc(teaType){
        return `Making ${teaType}`
    }
}

var teaMaker = createTeaMaker();

console.log(teaMaker("Green Tea"));