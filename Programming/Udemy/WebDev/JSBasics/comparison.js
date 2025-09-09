// Outside of the usual >= or <=, we also have "==" and "==="

// "==" refers to value
var number = 5;
var sameNumber = "5";

if (number == sameNumber){
    console.log("Both variables have the same value");
}
else{
    console.log("These variables don't have the same value");
    
}

// "===" is STRICT EQUAL, which means, same value AND same type

if (number === sameNumber){
    console.log("These variables have the same type and value!");
}
else{
    console.log("These variables have the same value but different type");
}