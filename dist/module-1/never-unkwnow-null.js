"use strict";
// null type
const getString = (string) => {
    if (string === null) {
        console.log("this is not any string");
    }
    else {
        console.log(string);
    }
};
console.log(getString("this is string"));
// unknown unknown type execute in run time
const getValueForUnknown = (value) => {
    if (typeof value === "string") {
        console.log(`this is string ${value}`);
    }
    else {
        console.log(value);
    }
};
console.log(getValueForUnknown("value"));
// Never type
const getNeverType = (msg) => {
    throw Error(msg);
};
console.log(getNeverType("this is message"));
