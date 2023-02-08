class Car {
    constructor() {
      this.name = null;
      this.make = null;
      this.color = null;
      this.speed = null;
    }
  
    setName(name) {
      this.name = name;
    }
  
    setMake(make) {
      this.make = make;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setSpeed(speed) {
      this.speed = speed;
    }
  
    print() {
      console.log(`Name: ${this.name}`);
      console.log(`Make: ${this.make}`);
      console.log(`Color: ${this.color}`);
      console.log(`Speed: ${this.speed}`);
    }
  }
  
  const car = new Car();
  car.setName("Tesla Model 3");
  car.setMake("Tesla");
  car.setColor("Red");
  car.setSpeed(250);
  car.print();
  