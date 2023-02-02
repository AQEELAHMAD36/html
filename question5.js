function createBase(baseNumber) {
    return function (numberToAdd) {
        return baseNumber + numberToAdd;
    }
}
var addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21));