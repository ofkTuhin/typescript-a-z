"use strict";
const userInfo = [101, "Ema", "John", true, , "2023"];
const tupplse1 = ["jhon", 101];
const tuplse2 = ["Ema", true];
const tuplse3 = [, "2023"];
const test = (params1, params2 = 3) => {
    for (let i = 0; i < params2; i++) {
        console.log(i + 1, params1);
    }
};
