function* numberGenerator(){
    yield 1
    yield 2
    yield 3   
}

let myGen = numberGenerator();
let myGenTwo = numberGenerator();

console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);

console.log(myGenTwo.next().value);
console.log(myGenTwo.next().value);
