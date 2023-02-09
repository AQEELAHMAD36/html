
// Class Shape
class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  // Class Circle extending Shape
  class Circle extends Shape {
    constructor(radius, color) {
      super(color);
      this.radius = radius;
    }
  
    calculateRadius() {
      return this.radius * this.radius * Math.PI;
    }
  }
  
  // Class Animal
  class Animal {
      speak() {
          console.log('speak');
      }
  }
  
  // Class Dog extending Animal
  class Dog extends Animal {
      speak() {
          console.log('bark');
      }
  
      eat() {
          console.log('eating');
      }
  }
  
  // Child class functions will always be executed
  let d = new Dog();
  d.speak(); // bark
  d.eat(); // eating
  
  // Class Calculator
  class Calculator {
      constructor() {
          this.inputs = [];
      }
  
      addInput(input) {
          this.inputs.push(input);
      }
  
      calculate() {
          let total = 0;
          this.inputs.forEach((input) => {
              switch (input.operator) {
                  case "+":
                      total = input.num1 + input.num2;
                      break;
                  case "-":
                      total = input.num1 - input.num2;
                      break;
                  case "*":
                      total = input.num1 * input.num2;
                      break;
                  case "/":
                      total = input.num1 / input.num2;
                      break;
              }
          });
  
          return total;
      }
  }
  
  // Example Usage
  let calc = new Calculator();
  calc.addInput({ num1: 2, num2: 3, operator: "+" });
  calc.addInput({ num1: 10, num2: 5, operator: "-" });
  let total = calc.calculate();
  console.log(total); // 5
  
  
    