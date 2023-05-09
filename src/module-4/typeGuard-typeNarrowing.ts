// example of type guard

interface User {
  name: string;
}
interface Admin {
  name: string;
  role: "role";
}
const users: User = { name: "tuhin" };
const admin: Admin = { name: "rasel", role: "role" };

const getUser = (user: User | Admin) => {
  // here "role" is type guard
  if ("role" in user) {
    console.log(user.name, user.role);
  } else {
    console.log(user.name);
  }
};
console.log(getUser(admin));
