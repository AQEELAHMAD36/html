
class Triangle {
    constructor(side1, side2, side3) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
   
    getPerimeter() {
      return this.side1 + this.side2 + this.side3;
    }
   
    getArea() {
      let p = this.getPerimeter() / 2;
      return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
    }
  }
   
  let triangle = new Triangle(3, 4, 5);
   
  console.log('The area of the triangle is: ' + triangle.getArea());
  console.log('The perimeter of the triangle is: ' + triangle.getPerimeter());
  