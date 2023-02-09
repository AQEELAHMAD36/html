
function Calculator(num1, num2) {
    this.add = function() {
      return num1 + num2;
    };
    this.minus = function(num3) {
      let result = this.add() - num3;
      return result;
    };
    this.multi = function(num4) {
      let result = this.minus(num3) * num4;
      return result;
    };
    this.divide = function(num5) {
      let result = this.multi(num4) / num5;
      return result;
    };
  }
  console.log(Calculator())