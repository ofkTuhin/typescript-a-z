// generich function

const newGenerichFunction = <T>(params: T): void => {
  console.log(params);
};
newGenerichFunction("x"); /* true */
newGenerichFunction(10); /* true */
newGenerichFunction(true); /* true */

// in generic constrains you can exted your type by other type
interface k {
  age: number;
  name: string;
}
const newGenerichFunctionConstrains = <T extends k>(params: T): void =>
  console.log(params);

newGenerichFunctionConstrains({
  name: "tuhin",
  age: 10,
}); /* in this example The Generich type T extends K */

type MandatoryTypes = { name: string; age: number; salary: number };
interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
}

const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
  const crush = "kate Winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

type MyInFoType = {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
};
const myInfo = {
  name: "Persian",
  age: 100,
  salary: 100000000,
  other1: false,
  other2: null,
};
const result5 = addMeInMyCrushMind(myInfo);
// generic constrains keyof
interface B {
  name: string;
  phone: number;
}
const genericKeyofFunction = <T, B extends keyof T>(parmas: T, key: B) =>
  console.log(parmas[key]);
const myself = {
  name: "John Doe",
  phone: 19,
};
genericKeyofFunction(myself, "name");
