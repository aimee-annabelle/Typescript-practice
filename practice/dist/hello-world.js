"use strict";
console.log("hello world");
let age = 12;
let person = "Annabelle";
let bool = true;
let anytype = 1;
anytype = "ok";
let arr = [1, 2, 3, 4, 5];
// tuple
let array = [1, "string", false];
// tuple array
let tuple = [
    [1, "ai"],
    [2, "ok"],
    [3, "ouch"],
];
// Union => allow optional types
let un;
un = 21;
// Enum => allows to create a set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const obj = {
    id: 1,
    name: "Aimee",
};
