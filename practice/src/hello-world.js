console.log("hello world");
var age = 12;
var person = "Annabelle";
var bool = true;
var anytype = 1;
anytype = "ok";
var arr = [1, 2, 3, 4, 5];
// tuple
var array = [1, "string", false];
// tuple array
var tuple = [
    [1, "ai"],
    [2, "ok"],
    [3, "ouch"],
];
// Union => allow optional types
var un;
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
var obj = {
    id: 1,
    name: "Aimee",
};
