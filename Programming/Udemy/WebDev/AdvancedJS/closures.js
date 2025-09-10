// Closures are FUNCTIONS
// They retain information

function outer(){
    let counter = 0;
    return function(){
        counter++
        return counter
    }
}

const increment = outer();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

// See how the counter increments even though it's declared with a "let", and it's being declared outside the function returned?
// That's the nature of closures