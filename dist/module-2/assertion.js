"use strict";
// type assertion
let typestring;
// with as keyword
typestring.length;
typestring = "this is assertion type";
// with angle
let typenumber;
typenumber / 2;
typenumber = 12;
// function with type assersion
const kgTogram = (params) => {
    if (typeof params === "string") {
        return `this result is ${parseInt(params) * 1000}`;
    }
    else if (typeof params === "number") {
        return params * 1000;
    }
};
const resultofstring = kgTogram("30");
const resultofnumber = kgTogram(100);
