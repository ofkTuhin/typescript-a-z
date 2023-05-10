"use strict";
// generich function
const newGenerichFunction = (params) => {
    console.log(params);
};
newGenerichFunction("x"); /* true */
newGenerichFunction(10); /* true */
newGenerichFunction(true); /* true */
const newGenerichFunctionConstrains = (params) => console.log(params);
newGenerichFunctionConstrains({
    name: "tuhin",
    age: 10,
}); /* in this example The Generich type T extends K */
const addMeInMyCrushMind = (myInfo) => {
    const crush = "kate Winslet";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "Persian",
    age: 100,
    salary: 100000000,
    other1: false,
    other2: null,
};
const result5 = addMeInMyCrushMind(myInfo);
const genericKeyofFunction = (parmas, key) => console.log(parmas[key]);
const myself = {
    name: "John Doe",
    phone: 19,
};
genericKeyofFunction(myself, "name");
