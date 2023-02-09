
class Shape {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    draw() {
      throw new Error('You have to implement this method');
    }
  }
  
  class Circle extends Shape {
    constructor(x, y, r) {
      super(x, y);
      this.r = r;
    }
    draw() {
      }
  }
  
  const shape = new Shape();