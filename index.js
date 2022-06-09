//! Example 1
//Object with data
function MyArray() {
  this.length = 0;
}

function MyArrayPrototype() {
  this.push = function (elem) {
    this[this.length] = elem;
    return ++this.length;
  };
}

const myArrayPrototype = new MyArrayPrototype();

MyArray.prototype = myArrayPrototype;

const myArr = new MyArray();
myArr.push(7);
console.log(myArr);
