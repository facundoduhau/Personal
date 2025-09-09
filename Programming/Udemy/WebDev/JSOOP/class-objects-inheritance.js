// Instead of creating objects/prototypes

let car = {
    brand: "Toyota",
    year: 2003,
    model: "Camry",

    production: function (){
        return `This car is a ${this.brand} ${this.model}, of the year ${this.year}`
    }
}

console.log(car.production());


// We can declare, instead, classes

class Vehicle{
    constructor(brand, model){
        this.brand = brand
        this.model = model
    }
    start(){
        return `This vehicle is a ${this.brand} ${this.model}`
    }
}

// We also can try out some INHERITANCE

class Car extends Vehicle{
    myMethod(){
        return `${this.model} is really well known worldwide`
    }
}

var newCar = new Car("Honda", "Civic")

console.log(newCar.brand);
console.log(newCar.model);

