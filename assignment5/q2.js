class Employee {
    constructor(salary, workHours) {
      this._salary = salary;
      this._workHours = workHours;
    }
  
    get salary() {
      return this._salary;
    }
  
    set salary(value) {
      this._salary = value;
    }
  
    get workHours() {
      return this._workHours;
    }
  
    set workHours(value) {
      this._workHours = value;
    }
  
    getInfo() {
      console.log(`Salary: ${this._salary}, Work hours: ${this._workHours}`);
    }
  
    addSal() {
      if (this._salary < 500) {
        this._salary += 10;
      }
    }
  
    addWork() {
      if (this._workHours > 6) {
        this._salary += 5;
      }
    }
  }
  
  const employee = new Employee(450, 8);
  employee.getInfo(); // Salary: 450, Work hours: 8
  employee.addSal();
  employee.addWork();
  console.log(`Final Salary: ${employee.salary}`); // Final Salary: 463
  