// Ex (1)
// Declare an array with items
// Access the array and store it in a variable

var myList = ['apples', 'pears', 'oranges'];

var myStoredVar = myList[0];

console.log(myStoredVar);

// Ex (2)
// Change the third element of an already declared array

var myArr = ['one', 'two', 'three'];

myArr[2] = 'Not Three'

console.log(myArr[2]);

// Ex (3)
// Push an item to an array

var myPushed = [1, 2, 3, 4, 5]

var toBePushed = 10;

myPushed.push(toBePushed);

console.log(myPushed);

// Ex (4)
// Remove last item of an array and store it in another variable

var declaredArray = ['green', 'blue', 'red']
var myPop = declaredArray.pop()

console.log(declaredArray);
console.log(myPop);

// Ex (5)
// Make a SOFT copy of an array

var myArr1 = [1, 2, 3, 1, 2, 3]
var myArr2 = myArr1;

console.log(myArr2);

// Ex (5)
// Create a HARD copy of another array

var newArr = [5, 4, 3, 2, 1]
var myHardCopy = [...newArr]

// Ex (6)
// Merge two different arrays together

var firstArray = [1, 2, 3, 4]
var secondArray = [5, 6, 7, 8]

var finalArray = firstArray.concat(secondArray)

console.log(finalArray);

// Ex (6)
// Check if there's an existing item in the array

var codeArr = ['js', 'python', 'go', 'rust']

if (codeArr.includes("js")){
    console.log("JavaScript is included");
    
}else{
    console.log("JavaScript is not included");
    
}