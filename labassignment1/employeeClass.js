
class Employee {
    constructor(name, yearOfJoining, salary, address) {
        this.name = name;
        this.yearOfJoining = yearOfJoining;
        this.salary = salary;
        this.address = address;
    }
}

let Robert = new Employee("Robert", 1994, "64C- WallsStreat");
let Sam = new Employee("Sam", 2000, "68D- WallsStreat");
let John = new Employee("John", 1999, "26B- WallsStreat");

console.log("Name" + "\t" + "Year of Joining" + "\t" + "Address");
console.log(Robert.name + "\t" + Robert.yearOfJoining + "\t" + Robert.address);
console.log(Sam.name + "\t" + Sam.yearOfJoining + "\t" + Sam.address);
console.log(John.name + "\t" + John.yearOfJoining + "\t" + John.address);
