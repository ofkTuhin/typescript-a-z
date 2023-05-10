import { forEachChild } from "typescript";

const userInfo = [101, "Ema", "John", true, , "2023"];

const tupplse1: [string, number] = ["jhon", 101];
const tuplse2: [string, boolean] = ["Ema", true];
const tuplse3: [undefined, string] = [, "2023"];

// practice problem 2

const getNewArray = (array1: number[], array2: number[]): number[] => {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        if (newArray[i] !== array1[i]) {
          newArray.push(array1[i]);
        }
      }
    }
  }
  return newArray;
};
console.log(getNewArray([1, 2, 3, 4], [1, 1, 5, 3]));

// practice problem 3
// You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const filterProduct = <T extends Pick<Product, "name" | "price">>(
  array: T[]
): T[] => {
  let filterData = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].price > 1200) {
      filterData.push(array[i]);
    }
  }
  return filterData;
};
const product: Pick<Product, "name" | "price">[] = [
  {
    name: "phone",
    price: 12000,
  },
  {
    name: "shoe",
    price: 120,
  },
  {
    name: "panjabi",
    price: 2000,
  },
];
console.log(filterProduct<Pick<Product, "name" | "price">>(product));

//practice problem 4
// Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple = [string, number, number];
const productInfo: ProductTuple = ["phone", 40, 3];

const calculateProduct = <T extends ProductTuple>(array: T[]): number => {
  let totalCost = 0;
  array.forEach((element) => {
    const [name, price, quantity] = element;
    totalCost = price * quantity;
  });
  return totalCost;
};
console.log(calculateProduct([productInfo]));

// Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

const arrayOfNumber: number[] = [12, 13, 15, 9, 72, 40, 64];
let total = 0;
for (let i = 0; i < arrayOfNumber.length; i++) {
  if (arrayOfNumber[i] % 2 !== 0) {
    total += arrayOfNumber[i];
  }
}
console.log(total);

// practice problem 5
// Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found

interface PersonInfo {
  name: string;
  age: number;
  email: string;
}

const personArray: PersonInfo[] = [
  {
    name: "tuhin",
    age: 20,
    email: "tuhin@gmail.com",
  },
  {
    name: "omar",
    age: 20,
    email: "omar@gmail.com",
  },
  {
    name: "faruk",
    age: 20,
    email: "farul@gmail.com",
  },
];
const getPerson = (person: PersonInfo[], email: string) => {
  for (let i = 0; i < person.length; i++) {
    if (person[i].email === email) {
      return person[i];
    } else {
      return null;
    }
  }
};
console.log(getPerson(personArray, "tuhin@gmail.com"));
