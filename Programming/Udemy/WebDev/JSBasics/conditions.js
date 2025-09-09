// Ex (1)
// Check if a number is greater than another

var first = 5;
var second = 10;

if (first > second){
    console.log("The first number is greater than the second one");
}
else{
    console.log("The second number is greater than the first");
};

// Ex (2)
// Check if one string is equal to another

var existingUser = "Facundo";
var myUser = "Facundo";

if (existingUser == myUser){
    console.log("Pick another username");
}
else{
    console.log("Username available");
}

// Ex (3)
// Check if a variable is a number or not

var number = 5;

if (typeof number == "number")
{
    console.log("Data is okay");
}
else{
    console.log("Data is corrupted");
}

// Ex (4)
// Check if a boolean value is true or false

var isTrue = false;

if (isTrue == true){
    console.log("State is true");
}
else{
    console.log("State is false");
};

// Ex(5)
// Check if an array is empty

var myArr = [1, 2, 3, 4];

if(myArr.length == 0){
    console.log("Array is empty");
}
else{
    console.log("Array has items");
};