// // 'use strict';

// const Person=function(firstName, birthYear){
//     this.firstName=firstName;
//     this.birthYear=birthYear;
// }

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda=new Person('Matilda',2017);
// const jack = new Person('Jack',1975);

// console.log(matilda,jack);

// console.log(matilda instanceof Person);

// Person.hey=function(){
//     console.log('Hey there');
// };

// // //Prototypes

// // Person.prototype.calcAge=function(){
// //     console.log(2037- this.birthYear);
// // };

// // jonas.calcAge();
// // matilda.calcAge();
// // jack.calcAge();

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(jonas));
// // console.log(Person.prototype.isPrototypeOf(matilda));
// // console.log(Person.prototype.isPrototypeOf(Person));

// // Person.prototype.species = 'Homo Spaiens';
// // console.log(jonas.species, matilda.species);
// // console.log(jonas.hasOwnProperty('firstName'));
// // console.log(jonas.hasOwnProperty('species')); 

// // console.log(jonas.__proto__);

// // console.log(jonas.__proto__.__proto__);
// // console.log(jonas.__proto__.__proto__.__proto__);
// // console.log(Person.prototype.constructor);

// // const arr=[7,2,9,4,6,6,7,6,9];
// // console.log(arr.__proto__);

// // console.log(arr.__proto__=== Array.prototype);

// // console.log(arr.__proto__.__proto__);
// // Array.prototype.unique= function(){
// //     return [...new Set(this)];
// // };

// // console.log(arr.unique());


// // //Coding challenge #1

// // const Car = function(make, speed){
// //     this.make=make;
// //     this.speed=speed;
// // } 
// // Car.prototype.accelerate=function(){
// //     return this.speed += 10;
// // }

// // Car.prototype.brake=function(){
// //     return this.speed-= 5;
// // }

// // const bmw = new Car('BMW',120);
// // const mercedes = new Car('Mercedes',95);

// // console.log(bmw.accelerate());
// // console.log(bmw.accelerate());
// // console.log(bmw.brake());

// // console.log(mercedes.brake());
// // console.log(mercedes.brake());
// // console.log(mercedes.accelerate());

// //Class expression
// // const PersonCl=class{

// // }

// //Class declaration
// class PersonCl{
//     constructor(fullName,birthYear){
//         this.fullName=fullName;
//         this.birthYear=birthYear;
//     }
//     //Instance methods
//     //Methods will be added to .prototype property
//     calcAge(){
//         console.log(2037-this.birthYear);
//     }

//     greet(){
//         console.log(`Hey ${this.firstName}`);
//     }

//     get age(){
//         return 2037-this.birthYear;
//     }

//     //Set a property that already exists
//     set fullName(name){
//         if(name.includes(' ')) this._fullName=name;
//         else alert(`${name} is not a full name!`);
//     }
//     get fullName(){
//         return this.__fullName;
//     }
//     //Static method
//     static hey(){
//         console.log('Hey there 👋');
//         console.log(this);
//     }
// }

// const jessica=new PersonCl('Jessica Davis',1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.age);
// console.log(jessica.__proto__===PersonCl.prototype);

// PersonCl.prototype.greet=function(){
//     console.log(`Hey ${this.firstName}`);
// }
// jessica.greet();
// PersonCl.hey();
// const account={
//     owner:'jonas',
//     movements:[200,530,120,300],

//     get latest(){
//         return this.movements.slice(-1).pop()
//     }
// }

// //Object.create
// const PersonProto={
//     calcAge(){
//         console.log(2037-this.birthYear);
//     },

//     init(firstName,birthYear){
//         this.firstName=firstName;
//         this.birthYear=birthYear;
//     }
// }
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name='Steven';
// steven.birthYear=2002;
// steven.calcAge();
// console.log(steven.__proto__);

// const sarah=Object.create(PersonProto);
// sarah.init('Sarah',1979);
// sarah.calcAge();



// //Coding challenge 2

// /* 
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */


// /* 
// 1. Re-create challenge 1, but this time using an ES6 class;
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// DATA CAR 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀
// */
// class CarProto {
//     constructor (make,speed){
//         this.make=make;
//         this.speed=speed;
//     }
//    accelerate(){
//        this.speed+=10;
//        console.log(`${this.make} is going at ${this.speed} km/h`);
//    }
//    brake(){
//        this.speed-=5;
//        console.log(`${this.make} is going at ${this.speed} km/h`);
//    }

//    get speedUS(){
//        return this.speed/1.6;
//    }
//    set speedUS(speed){
//        return this.speed=speed*1.6;
//    }
// } 
// // const bmw = new Car('BMW',120);
// // const mercedes = new Car('Mercedes',95);
// const bmw = new CarProto('BMW',120);
// console.log(bmw.speedUS);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// bmw.speedUS=50;
// console.log(bmw);


const Person = function(firstName, birthYear){
    this.firstName= firstName;
    this.birthYear=birthYear;
}

Person.prototype.calcAge=function(){
    console.log(2037- this.birthYear);
};

const Students = function(firstName,birthYear,course){
    Person.call(this,firstName,birthYear);
    this.course=course;
}
//Liking prototype
Students.prototype=Object.create(Person.prototype);
Students.prototype.introduce=function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike=new Students('Mike',2020,'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
Students.prototype.constructor=Students;
console.dir(Students.prototype.constructor);


/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function(make,currentSpeed){
    this.make=make;
    this.currentSpeed=currentSpeed;
}
Car.prototype.accelerate = function(){
    this.currentSpeed=+10;
    console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
}
Car.prototype.brake=function(){
    this.currentSpeed-=5;
    console.log(`${this.make} is going at ${this.currentSpeed} km/h`);
}

//Link the prototype
// Car.prototype.accelerate=
const EV =function(make,currentSpeed,charge){
    Car.call(this,make,currentSpeed);
    this.charge=charge;
}

EV.prototype=Object.create(Car.prototype);

EV.prototype.chargeBattery= function(chargeTo){
    this.charge=chargeTo;
}

EV.prototype.accelerate=function(){
    this.currentSpeed+=20;
    this.charge--;
    console.log(`${this.make} is going at ${this.currentSpeed} km/h, with a charge of ${this.charge}`);
}
const tesla = new EV('Tesla',120,23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();



class PersonCl{
    constructor(fullName, birthYear){
        this.fullName=fullName;
        this.birthYear=birthYear;
    }

    calcAge(){
        console.log(2037-this.birthYear);
    }

    greet(){
        console.log(`Hey ${this.fullName}`);
    }

    get age(){
        return 2037-this.birthYear;
    }

    set fullName(name){
        if(name.includes(' ')) this._fullName=name;
        else alert(`${name} is not a full name!`);
    }
    
    get fullName(){
        return this._fullName;
    }
    static hey(){
        console.log('Hey there ')
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course){
        //Always needs to happen first!
        super(fullName, birthYear);

        this.course=course;
    }

    introduce(){
        console.log(`My name is ${this.fullName} and i study ${this.course}`);
    }
    calcAge(){
        console.log(` I'm ${2037-this.birthYear} years old, but as a student i feel more like ${2037-this.birthYear+10}`)
    }
}

const martha = new StudentCl('Martha Jones',2012,'Computer Science');
martha.introduce();
martha.calcAge();

const PersonProto={
    calcAge(){
        console.log(2037-this.birthYear);
    },
    
    init(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init=function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course=course;
}

StudentProto.introduce=function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay',2010,'Computer Science')
jay.introduce();
jay.calcAge();

class Account{
    constructor(owner,currency,pin){
        this.owner=owner;
        this.currency=currency;

        //Protected property
        this._pin=pin;
        this._movements=[];
        // this.locale=navigator.language;
        console.log(`Thanks for opening an account, ${owner}`);
    }
    //Public interface
    getMovements(){
        return this._movements;
    }
    deposit(val){
        this._movements.push(val);
    }

    withdraw(val){
        this.deposit(-val);
    }
    _approveLoan(val){
        return true;
    }
    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
}

const acc1=new Account('Jonas','EUR',1111);
console.log(acc1);
// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1);
console.log(acc1.pin);

