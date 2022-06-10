function toSting() {
  return `${this.name} ${this.sname}`;
}

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
    return this.name + " petting";
  };
}

RabbitPet.prototype = new Rabbit();
const rabbitPet1 = new RabbitPet("Pitter");
const rabbitPet2 = new RabbitPet("Sam");

function RabbitMagic(name) {
    this.name = name;
  this.say = function (word) {
    return this.name + " say " + word;
  };
}

RabbitMagic.prototype = new RabbitPet();
const rabbitMagic1 = new RabbitMagic("Patric");
const rabbitMagic2 = new RabbitMagic("Bob");
