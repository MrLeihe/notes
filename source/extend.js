// 1、原型链继承
function Person() {
  this.name = "stone";
}

Person.prototype.getName = function () {
  console.log(this.name);
};

function Child() {}

Child.prototype = new Person();

var child = new Child();

child.getName();

// 2、借用构造函数 （经典继承）
function Person() {
  this.names = ["stone", "pony"];
}

function Child() {
  Person.call(this);
}

var child1 = new Child();

child1.names.push("tom");
console.log(child1.names);

var child2 = new Child();
console.log(child2.names);

// 3、组合继承
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Person.call(this, name);
  this.age = age;
}

Child.prototype = new Person();
Child.prototype.constructor = Child;

var child = new Child("stone", 80);

// 4、原型式继承 Object.create
function create(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// 5、寄生式继承
function create(o) {
  var clone = Object.create(o);
  clone.getName = function () {
    console.log(this.name);
  };
  return clone;
}

// 寄生组合式继承
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Person.call(this, name);
  this.age = age;
}

function F() {}
F.prototype = Parent.prototype;

Child.prototype = new F();
//   Child.prototype.constructor = Child;

var child = new Child("stone", 80);

// 最后的封装finally
function create(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function prototype(parent, child) {
  child.prototype = create(parent.prototype);
  child.prototype.constructor = child;
}
