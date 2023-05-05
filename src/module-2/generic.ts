// Generich array
type GenerichArray<T> = Array<T>;
const numberArray: GenerichArray<number> = [1, 2, 3, 4];
const stringArray: GenerichArray<string> = ["ab", "cd", "ef"];
interface ObjectType {
  name: string;
  age: number;
}

const myinfo: GenerichArray<ObjectType> = [
  {
    name: "tuhin",
    age: 27,
  },
];

// generic touples
type GenerichTouples<X, Y> = [X, Y];

const touplesOfCouples: GenerichTouples<string, string> = ["tuhin", "khan"];

// interface generic
interface GenericInterface<T, U = null> {
  name: string;
  age: T;
  job?: U;
}
const myinfoAbout: GenericInterface<number, boolean> = {
  name: "tuhin",
  age: 27,
  job: true,
};

// functionn in Generic type

const genericFuntion = <T>(params: T): T[] => [params];
genericFuntion(<string>"tuhin");
// touples
const genericFuntionTuples = <X, Y>(param1: X, param2: Y): [X, Y] => [
  param1,
  param2,
];
