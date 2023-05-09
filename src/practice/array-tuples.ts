const userInfo = [101, "Ema", "John", true, , "2023"];

const tupplse1: [string, number] = ["jhon", 101];
const tuplse2: [string, boolean] = ["Ema", true];
const tuplse3: [undefined, string] = [, "2023"];

const test = (params1: string, params2: number = 3): void => {
  for (let i: number = 0; i < params2; i++) {
    console.log(i + 1, params1);
  }
};
