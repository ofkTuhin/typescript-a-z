// create parrent class
class Parents {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    (this.name = name), (this.address = address), (this.age = age);
  }
  makesleep(hours: number): string {
    return `This ${this.name} sleep ${hours} hours`;
  }
}
// student class
class Student extends Parents {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("faruk", 27, "shymoly");
console.log(student1);

// teacher class
class Teacher extends Parents {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(classes: number): string {
    return `This ${this.name} take ${classes} class`;
  }
}
const teacher1 = new Teacher("yasin", 27, "khilgaon", "englisg");
console.log(teacher1.takeClasses(2));
