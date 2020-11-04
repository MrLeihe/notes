Function.prototype.bind2 = function (context) {
  if (typeof this !== "function") {
    throw new Error(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  function fNOP() {}

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    var bindContext = this instanceof fBound ? this : context;
    return self.apply(bindContext, args.concat(bindArgs));
  };

  fNOP.prototype = self.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};

var foo = {
  value: "fuck",
};

function bar(name, age) {
  this.name = name;
  console.log(this.value);
  console.log("name is " + name);
  console.log("age is ", age);
}

bar.prototype.job = "teacher";

var fn = bar.bind2(foo, "stone");

fn(18);
