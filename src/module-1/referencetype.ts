// when we declare an array without mentioning any type it will be multi type
const multi_type = ["name", 123, null, undefined, false];
// when specifie any kind of type like: string ,number, boolean or others then we assign only this type of value to the array
const names: string[] = ["faruk", "tuhin"];
// here we can insert only string to this array

// same as
const numbers: number[] = [1, 2, 3];

// Touples
// when we specify the type of the position of an array this calld touples
//  here only insert the specific value for the specific type
const touples: [number, string] = [123, "string"];

// Object Type

const customer: {
  id: number;
  name: string;
  member: boolean;
} = {
  id: 1,
  name: "farhad",
  member: true,
};
//  In this case we can only use the specific type of the value on each field of the object for example we can't use string for the value of id

// literal type
// when a field of an object is specify a value then it's called literal type

const user: {
  name: string;
  country: "Bangladesh";
} = {
  name: "abul",
  country: "Bangladesh",
};
//  here the type of country is Banglades

const employee: {
  readonly company: string;
  name: string;
} = {
  name: "abcd",
  company: "olio",
};
// in this case we can read only the country value bt caan't update the value
