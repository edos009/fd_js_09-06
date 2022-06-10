//! Example 1
//Object with data
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

function MyArrayPrototype() {
  this.push = function (elem) {
    this[this.length] = elem;
    return ++this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastElem = this[this.length - 1];
    delete this[this.length - 1];
    --this.length;
    return lastElem;
  };
}

MyArray.prototype = new MyArrayPrototype();
const myArr = new MyArray(1, 2, 3, 4, 5);
// myArr.push(7);
// console.log(myArr);
