"use strict";
// typeof guard
const getVar = (value) => {
    if (typeof value === "number") {
        console.log(`Value ${value} is a number`);
    }
    else {
        console.log(`Value ${value} is a string`);
    }
};
getVar("2");
// instanceof guard
class Dog {
    constructor() {
        this.legs = 4;
        this.tail = true;
        this.sound = "Bark";
    }
}
class Bird {
    constructor() {
        this.legs = 2;
        this.wings = "bird wings";
        this.fly = true;
        this.eat = "grains";
    }
}
const whatAnimal = (animal) => {
    if (animal instanceof Dog) {
        console.log(`Dog has ${animal.legs} legs and a tail and it ${animal.sound}`);
    }
    else {
        console.log(`Bird has ${animal.legs} legs and ${animal.wings}, it flies and eat ${animal.eat}`);
    }
};
const hen = new Bird();
whatAnimal(hen);
// in type guard
const HowManyLegs = (animal) => {
    if ("tail" in animal) {
        return `The animal has ${animal.legs} legs`;
    }
    else {
        return `The animal has ${animal.legs} legs`;
    }
};
const dog = new Dog();
console.log(HowManyLegs(dog));
// User defined type guards
class Customer {
    constructor() {
        this.role = 'Customer';
    }
}
class Seller {
    constructor() {
        this.privilege = 'Post resources';
    }
}
const isCustomer = (person) => {
    return person instanceof Customer;
};
const isSeller = (person) => {
    return "privilege" in Seller;
};
function checkUser(user) {
    if (isCustomer(user)) {
        return `the user is a customer`;
    }
    else if (isSeller(user)) {
        return `The user is a seller`;
    }
    else {
        return 'User role unknown';
    }
}
