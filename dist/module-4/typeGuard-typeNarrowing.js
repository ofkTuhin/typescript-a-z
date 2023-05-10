"use strict";
// example of type guard
const users = { name: "tuhin" };
const admin = { name: "rasel", role: "role" };
const getUser = (user) => {
    // here "role" is type guard
    if ("role" in user) {
        console.log(user.name, user.role);
    }
    else {
        console.log(user.name);
    }
};
console.log(getUser(admin));
