// Asynchronous in JavaScript is used when you don't want the code to be executed instantly, on a synchronous way
// It allows a kind of "pause"
// For example, network calls need async, since it isn't instant
// Another example can be writing/reading files (from a disk)
// Time functions too

const greet = function (){
    console.log("Four seconds have passed");
}

setTimeout(() => {
    greet();
}, 4000);

for(let i = 0; i < 4; i++){
    console.log(i);
}

// Notice the for loop logs before the sync

// This doesn't mean the code runs before, it's just that JS has read from line 11 that it needs to wait 4 seconds, so it keeps reading
// This is the nature of async, things happen simultaniously