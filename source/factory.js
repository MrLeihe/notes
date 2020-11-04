// 工厂模式
function createPerson(name) {
  var obj = {};
  obj.name = name;
  obj.sayName = function () {
    console.log(this.name);
  };
  return obj;
}

createPerson("stone");

// 构造函数模式
function Person(name) {
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
}

new Person("stone");

// 原型模式
function Person(name) {}

Person.prototype.name = "stone";

Person.prototype.sayName = function () {
  console.log(this.name);
};

// 原型模式优化
function Person(name) {}

Person.prototype = {
  constructor: Person,
  name: "stone",
  sayName: function () {
    console.log(this.name);
  },
};

// 组合模式
function Person(name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name);
  },
};

// 寄生构造模式
function Person(name) {
  var obj = {};
  obj.name = name;
  obj.sayName = function () {
    console.log(this.name);
  };
  return obj;
}
