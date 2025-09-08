// The classic Let vs Const vs Var

// const is a CONSTANT, cannot be changed in the future.
// If it DOES change, it will log an error

const PI = 3.141516;

// PI = 3; LOGS ERROR

console.log("PI constant value:", PI);

// var is a VARIABLE, it CAN change, no harm done.

var myApples = 5;

console.log("My apples starting value:", myApples);

myApples = 8

console.log("Change in my apples value:", myApples);


// Let is a block-scoped declaration.
// It is used inside a function, to avoid having the same value anywhere outside of it.

function myLet() {
    for (let i = 0; i < 2; i++)
        console.log("This is myLet value:", i);
};

myLet();

// console.log("This is myLet value after the function:", i); RETURNS UNDEFINED