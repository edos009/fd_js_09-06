// function sum() {
//   let sum = 0;
//   // console.log(arguments);
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum
// }

// console.log(sum(1, 2, 3, 4, 5));

//! Example
/*
function Accumulator(currentPower, maxPower) {
  this.currentPower = currentPower;
  this.maxPower = maxPower;
}

function MyAccumulator() {
  this.chargeAccumulator = function (power) {
    if (this.currentPower + power <= this.maxPower) {
      this.currentPower += power;
      return this.currentPower;
    }
    this.currentPower = this.maxPower;
    return this.currentPower;
  };

  this.unChargeAccumulator = function (power) {
    if (this.currentPower - power >= 0) {
      this.currentPower -= power;
      return this.currentPower;
    }
    this.currentPower = 0;
    return this.currentPower;
  };
}

Accumulator.prototype = new MyAccumulator();

const accumulator = new Accumulator(50, 100);
*/
