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

//! Example
// Кролики наследования прототипов с обьектами
// const rabbit = {
//   eat() {
//     return (this.name ? this.name : "I'm") + " eating";
//   },
//   jump() {
//     return (this.name ? this.name : "I'm") + " jumping";
//   },
// };

// const rabbitPet = {
//   name: "Pitter",
//   petMe() {
//     return this.name + "petting";
//   },
//   __proto__: rabbit,
// };

// const rabbitMagic = {
//   say(word) {
//     return this.name + " say " + word;
//   },
//   __proto__: rabbitPet,
// };

//! Example
// Кролики наследования прототипов с конструктором
/*
function Rabbit() {
  this.eat = function () {
    return (this.name ? this.name : "I'm") + " eating";
  };
  this.jump = function () {
    return (this.name ? this.name : "I'm") + " jumping";
  };
}

function RabbitPet(name) {
  this.name = name;
  this.petMe = function () {
    return this.name + "petting";
  };
}

RabbitPet.prototype = new Rabbit();
const rabbitPet1 = new RabbitPet("Pitter");

function RabbitMagic(name) {
  this.name = name;
  this.say = function (word) {
    return this.name + " say " + word;
  };
}

RabbitMagic.prototype = new RabbitPet();
const rabbitMagic1 = new RabbitMagic("Pitter");
const rabbitMagic2 = new RabbitMagic("Pitter");
*/

//! Example

function Ledder() {
  this.step = 0;
}

function LedderPrototype() {
  this.up = function () {
    this.step += 1;
    return this
  };
  this.down = function () {
    this.step -= 1;
    return this;
  };
  this.showStep = function () {
    return this.step;
  };
}

Ledder.prototype = new LedderPrototype();

const ledder1 = new Ledder();
