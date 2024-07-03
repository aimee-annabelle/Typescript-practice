console.log("hello world");
let age: number = 12;
let person: string = "Annabelle";
let bool: boolean = true;
let anytype: any = 1;
anytype = "ok";
let arr: number[] = [1, 2, 3, 4, 5];

// tuple
let array: [number, string, boolean] = [1, "string", false];
// tuple array
let tuple: [number, string][] = [
  [1, "ai"],
  [2, "ok"],
  [3, "ouch"],
];

// Union => allow optional types

let un: number | boolean;
un = 21;

// Enum => allows to create a set of named constants
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Up);

type obj = {
  id: number;
  name: string;
};

const obj = {
  id: 1,
  name: "Aimee",
};

