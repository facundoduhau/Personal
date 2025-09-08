// Data is stored in the memory

// We have the following data types:

// String (text)
var myString = "Hello, I'm a string!";

console.log(myString);


// Boolean (true or false, 0 or != 0)
var myBool = true;

if (myBool == true){
    console.log("Yup! It's true!")
}
else{
    console.log("No! It's false!");
}

// Int (Number)
var myInt = 5;

console.log("The int value is:",myInt);

// Big Int (Big number)
// Numeric literals with absolute values >= 2⁵³ are too large to be repesented accurately as integers
var badInt = 9999999999999999
console.log("My bad int declaration:", badInt);

var bigInt = 9999999999999999n
console.log("Same number but Big Int:", bigInt);