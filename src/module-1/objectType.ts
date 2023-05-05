// type alias and optional type
type Developers = {
  name: string;
  position: string;
  age: number;
  experience?: number /*optional*/;
};
const developers: Developers[] = [
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

// fuction example
type OperationType = (x: number, y: number) => number;
const calculate = (
  number1: number,
  number2: number,
  oparation: OperationType
) => oparation(number1, number2);

console.log(calculate(10, 20, (x, y) => x + y));

function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
