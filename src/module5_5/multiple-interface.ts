// generic type interface
interface Model<Tuser, Tmethod> {
  user: Tuser;
  method: Tmethod;
}

interface User {
  name: string;
  address: string;
}
interface Method {
  getUserInfo(): string;
}
type user = Model<User, Method>;
class GetUser implements user {
  user: User;
  method: Method;
  constructor(name: string, address: string) {
    this.user = {
      name,
      address,
    };
    this.method = {
      getUserInfo: () =>
        `His name is ${this.user.name} and he lives in ${this.user.address}`,
    };
  }
}

const usrInfo = new GetUser("faruk", "shymoly");
console.log(usrInfo.method.getUserInfo());
