interface Employee {
  name: string;
  age: number;
  phone: string;
  address: string;
  designation: string;
}
// pick todo
type pickValue = Pick<Employee, "name" | "address">;
// Required
type required = Required<Employee>;
// partial type
type partial = Partial<Employee>;

// record type
type Developer = "somrat" | "sojon" | "faruk";

const developer: Record<Developer, Pick<Employee, "phone" | "address">> = {
  somrat: {
    phone: "glkgjlg",
    address: "dhaka",
  },
  sojon: {
    phone: "glkgjlg",
    address: "dhaka",
  },
  faruk: {
    phone: "glkgjlg",
    address: "dhaka",
  },
};
