// let obj={
//     a:1,
//     b: "Jalaj"
// }

// let animal={
//     eats: true
// };

// let rabbit={
//     jumps: true
// };

// rabbit.__proto__ = animal;    // this method is depricated

class Animal{
    constructor(name){
        this.name=name;    //initialising the objects
        console.log(" this is constructor")
        console.log("Object is created!")
    }
    eats(){
        console.log("Eating")
    }
    jumps(){
        console.log("Jumping")
    }
}

let a= new Animal("Bunny");
console.log(a)

// Inheriting the class
class Lion extends Animal{
    eats(){     // Method overriding :- only this feature will be available
        super.eats();     // This kewyword will call the parent method too
        console.log("I am carnivores");
    }
}

let b=new Lion("Shera");
console.log(b);


