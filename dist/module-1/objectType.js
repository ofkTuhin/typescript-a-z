"use strict";
const developers = [
    {
        name: "faruk",
        age: 27,
        position: "developer",
    },
    {
        name: "sojon",
        age: 27,
        position: "developer",
        experience: 2,
    },
];
const calculate = (number1, number2, oparation) => oparation(number1, number2);
console.log(calculate(10, 20, (x, y) => x + y));
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
