function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Data fetched with no problems")
            }
            else{
                reject("There was a problem fetching the data")
            }
        }, 3000)
    })
}

var response = fetchData();

console.log(response);

// To know the fetched data status, you can do:

fetchData()
    .then((data)=>console.log(data))
    .catch((error)=>console.error(error))