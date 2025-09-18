function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({name: 'Facundo', url: 'https://facundowebdev.com'})
        }, 3000)
    })
};

fetchUserData() // Traditional method
    .then()
    .catch();

async function getUserData() {
    try{
        console.log("Fetching user data...");
        console.log("User data fetched succesfully");
        const userData = await fetchUserData() // await only works with async
        console.log("User data: ", userData);
    }
    catch (error){
        console.log("Error fetching data", error);
    }
}

getUserData();

// You can send data as rejected by adding literally "reject" before the data