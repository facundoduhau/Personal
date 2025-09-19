// This is how you export functions and default functions

export const mySum = function(a, b){
    return a + b;
};

export const mySubtract = function(a, b){
    return a - b;
};

const myMultiply = function (a, b){
    return a * b;
};

export default myMultiply();