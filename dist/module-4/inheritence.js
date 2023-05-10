"use strict";
// create parrent class
class Parents {
    constructor(name, age, address) {
        (this.name = name), (this.address = address), (this.age = age);
    }
    makesleep(hours) {
        return `This ${this.name} sleep ${hours} hours`;
    }
}
// student class
class Student extends Parents {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student("faruk", 27, "shymoly");
console.log(student1);
// teacher class
class Teacher extends Parents {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(classes) {
        return `This ${this.name} take ${classes} class`;
    }
}
const teacher1 = new Teacher("yasin", 27, "khilgaon", "englisg");
console.log(teacher1.takeClasses(2));
