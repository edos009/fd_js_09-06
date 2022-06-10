function toSting() {
  return `${this.name} ${this.sname}`;
}

const person = {
  id: 1,
  name: "Eduard",
  sname: "Tiutiunnyk",
  toSting,
};
const worked = {
  role: "builder",
};

worked.__proto__ = person;

console.log(worked.name);
