// Ex (1)
// Write a while loop that calculates the sum of all
// numbers from 1 to 5 and store it in a variable
// called sum

let sum = 0;
let i = 0;

while (i <= 5) {
    sum += i;
    i++;
}

console.log(sum);

// Ex (2)
// Write a while loop with a countdown from 5 to 1

let countdown = 5;

while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

// Ex (3)
// Execute a do while loop waiting for the user to prompt some input

// let myCollection = [];
// let myItems;

// do {
//     myItems = prompt("Enter your items (Type 'stop' to end)")

//     if(myItems !== 'stop'){
//     myCollection.push(myItems);
//     }

// } while (myItems !== 'stop'); BROWSER

// Ex (4)
// Write a For Loop that multiplies an existing array
// and  stores it in a new one

let primerArr = [1, 2, 3]
let segundoArr = [];

for (let i = 0; i < 3; i++) {
    segundoArr[i] = primerArr[i] * 2
};

console.log(segundoArr);

// Ex (5)
// Use a For Of loop to iterate through an array
// and stop when number "4" is found
// Store the numbers before "4" in a variable

var numbers = [1,2,3,4,5];
var newNumbers = [];

for (const num of numbers) {
    if (num === 4){
        break;
    }
    else{
        newNumbers.push(num);
    }
}

console.log(newNumbers);

// Ex (6)
// Create a For In loop
// Loop through list, when it reaches a specific item
// store the previous items on the list

var myObject = {
    friends: 20,
    family: 5,
    connections: 3,
};

var myStorage = {}

for (const people in myObject) {
    if (myObject[people] != 5){
    myStorage[people] = myObject[people]
    }
    else{
        break;
    }
}

console.log(myStorage);

// Ex (7)
// Write a "ForEach" loop that iterates through the array, skips an element and stores the other elements
// in a new array

var forArray = ['yes', 'no', 'maybe', 'we will se'];

var newForArray = [];

forArray.forEach(word => {
    if (word != 'maybe'){
        newForArray.push(word);
    }
});

console.log(newForArray);
