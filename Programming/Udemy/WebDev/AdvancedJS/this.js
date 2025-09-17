const person = {
    name: 'Facundo',

    greet(){
        console.log(`Hello, I'm ${this.name}`);
        
    }
}

person.greet()

const greetPerson = person.greet;

greetPerson()

/*
This returns undefined

It's because, it understands there is a function associated

But it can't inherite the name associated

It's missing context
*/

const betterGreet = person.greet.bind({name: "Lucas"})

betterGreet()

/*
    Common ligatures for <this> functions are:
        bind
        call
        apply
*/