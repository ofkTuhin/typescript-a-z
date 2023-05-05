// type assertion
let typestring: any;

// with as keyword
(typestring as string).length;
typestring = "this is assertion type";

// with angle
let typenumber: any;

<number>typenumber / 2;
typenumber = 12;

// function with type assersion
const kgTogram = (params: string | number): string | number | undefined => {
  if (typeof params === "string") {
    return `this result is ${parseInt(params) * 1000}`;
  } else if (typeof params === "number") {
    return params * 1000;
  }
};
const resultofstring = kgTogram("30") as string;
const resultofnumber = <number>kgTogram(100);
