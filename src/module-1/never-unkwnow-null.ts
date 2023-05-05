// null type
const getString = (string: string | null) => {
  if (string === null) {
    console.log("this is not any string");
  } else {
    console.log(string);
  }
};
console.log(getString("this is string"));

// unknown unknown type execute in run time

const getValueForUnknown = (value: unknown) => {
  if (typeof value === "string") {
    console.log(`this is string ${value}`);
  } else {
    console.log(value);
  }
};
console.log(getValueForUnknown("value"));
// Never type

const getNeverType = (msg: string): never => {
  throw Error(msg);
};
console.log(getNeverType("this is message"));
