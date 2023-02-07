class Shape{
    constructor(name , sides , sidelength){
        this.name = name;
        this.sides = sides;
        this.sidelength = sidelength;
        this.#validate();
    }
    #validate = () => {
     if( (isNaN == this.sides) || this.sides <= 2)
      
     throw"please throw valid arugments" 

    }
    triangle = () => {
        let triangle = this.sides * this.sidelength ; 
        return triangle;
    }
    square = () => {
        let sqaure = this.sides * this.sidelength ; 
        return square;
    }
}
 
 const trianglearea = new Shape('a',3 ,3)
 console.log("The area of triangle is = " + trianglearea.triangle());
 const squarearea = new Shape('a',4,5)
 console.log("The area of square is = " +squarearea.triangle());