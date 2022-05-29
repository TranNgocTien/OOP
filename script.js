'use strict';

const Person=function(firstName, birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda=new Person('Matilda',2017);
const jack = new Person('Jack',1975);

console.log(matilda,jack);

console.log(matilda instanceof Person);


//Prototypes

Person.prototype.calcAge=function(){
    console.log(2037- this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Spaiens';
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')); 

console.log(jonas.__proto__);

console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);

const arr=[7,2,9,4,6,6,7,6,9];
console.log(arr.__proto__);

console.log(arr.__proto__=== Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.unique= function(){
    return [...new Set(this)];
};

console.log(arr.unique());


//Coding challenge #1

const Car = function(make, speed){
    this.make=make;
    this.speed=speed;
} 
Car.prototype.accelerate=function(){
    return this.speed += 10;
}

Car.prototype.brake=function(){
    return this.speed-= 5;
}

const bmw = new Car('BMW',120);
const mercedes = new Car('Mercedes',95);

console.log(bmw.accelerate());
console.log(bmw.accelerate());
console.log(bmw.brake());

console.log(mercedes.brake());
console.log(mercedes.brake());
console.log(mercedes.accelerate());

