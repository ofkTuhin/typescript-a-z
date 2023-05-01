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
