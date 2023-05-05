// function in Typescript
// function in typescript take implicitly type of parameter as any

// normal function
// function add(num1, num2) {
//   return num1 + num2;
// }
// arrow function
// const addNumber = (num1, num2) => num1 + num2;
//  here both num1 and num2 are any type value

// declare fuction with type
function adding(num1: number, num2: number): number {
  return num1 + num2;
}
// arrow function
const addvalue = (num1: number, num2: number): number => num1 + num2;

// general format
// function function_name(parameter:type):return_type{return value}

// callback function
const array = [1, 2, 2];
array.map((item: number) => item + item);

// method in typescript
const bank_statement: {
  name: string;
  balance: number;
  getBalance(money: number): number;
} = {
  name: "IBL",
  balance: 500,
  getBalance(money: number) {
    return money + this.balance;
  },
};

// method in typescript
const bank_statement_m: {
  name: string;
  balance: number;
  getBalance(money: number): void;
} = {
  name: "IBL",
  balance: 500,
  getBalance(money: number) {
    return `My new balance ${money + this.balance}`;
  },
};

// Default Perameter

// Default value can only for the last perameter of a function in typescrip
function addTwoNumber(number1: number, number2: number = 20) {
  return number1 + number2;
}
addTwoNumber(10);
console.log(addTwoNumber(10));

// spread operator separate value fro an array
const array1: string[] = ["a", "b", "c"];
const array2: string[] = ["x", "y", "z"];
array1.push(...array2);
console.log(array1);

// rest operate create an array using different value
function team(...employes: string[]): string[] {
  return employes.map((item: string) => item);
}
const Developers = team("somrat", "sojon", "faruk", "sumon", "sohag", "mukles");
console.log(Developers);
