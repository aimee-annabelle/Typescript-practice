// typeof guard

type numString = number | string;

const getVar = (value: numString): void => {
  if (typeof value === "number") {
    console.log(`Value ${value} is a number`);
  } else {
    console.log(`Value ${value} is a string`);
  }
};
getVar("2");

// instanceof guard

class Dog {
  legs: number;
  tail: boolean;
  sound: string;
  constructor() {
    this.legs = 4;
    this.tail = true;
    this.sound = "Bark";
  }
}

class Bird {
  legs: number;
  wings: string;
  fly: boolean;
  eat: string;
  constructor() {
    this.legs = 2;
    this.wings = "bird wings";
    this.fly = true;
    this.eat = "grains";
  }
}

type Animal = Dog | Bird;

const whatAnimal = (animal: Animal): void => {
  if (animal instanceof Dog) {
    console.log(
      `Dog has ${animal.legs} legs and a tail and it ${animal.sound}`
    );
  } else {
    console.log(
      `Bird has ${animal.legs} legs and ${animal.wings}, it flies and eat ${animal.eat}`
    );
  }
};

const hen = new Bird();
whatAnimal(hen);

// in type guard

const HowManyLegs = (animal: Animal): string => {
  if ("tail" in animal) {
    return `The animal has ${animal.legs} legs`;
  } else {
    return `The animal has ${animal.legs} legs`;
  }
};

const dog = new Dog();

console.log(HowManyLegs(dog));

// User defined type guards

class Customer{
    role: string
    constructor(){
        this.role = 'Customer'
    }
}

class Seller {
    privilege: string
    constructor() {
        this.privilege = 'Post resources'
    }
}

type User = Customer | Seller

const isCustomer = (person: User): person is Customer =>{
    return person instanceof Customer
}

const isSeller = (person: User): person is Seller => {
    return "privilege" in Seller
}

function checkUser(user:User):string {
    if (isCustomer(user)) {
        return `the user is a customer`
    } else if(isSeller(user)){
        return `The user is a seller`
    } else {
        return 'User role unknown'
    }
}
