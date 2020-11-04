function objectFactory() {
  // 创建 obj 对象
  var obj = {};
  // 构造函数
  var Constructor = Array.prototype.shift.call(arguments);
  // 将实例的  __proto__ 属性指向构造函数的 prototype 属性
  obj.__proto__ = Constructor.prototype;
  // 使用 apply，改变构造函数的 this 的指向为新创建的 obj 对象，obj 就能访问到构造函数中属性
  var ret = Constructor.apply(obj, arguments);
  // 返回 obj
  return ret instanceof Object ? ret : obj;
}

function Parent(name) {
  this.name = name;
  this.age = 18;
  return function () {};
}

Parent.prototype.wealth = 1000;

Parent.prototype.sayName = function () {
  console.log(this.name);
};

var target = objectFactory(Parent, "stone");
console.log(target);
