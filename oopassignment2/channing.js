
class Human {
    constructor(name, foodName, shoeType) {
        this.name = name;
        this.foodName = foodName;
        this.shoeType = shoeType;
    }
 
    eat() {
        console.log("My name is", this.name, "and I eat", this.foodName);
    }
 
    sleep() {
        console.log("I sleep");
    }
 
    walk() {
        console.log("I walk using", this.shoeType);
    }
}
 
let person1 = new Human("John", "apples", "sneakers");
person1.eat();
person1.sleep();
person1.walk();
