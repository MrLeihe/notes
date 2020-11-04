function extend() {
  // 参数长度
  var len = arguments.length;
  // 第一个目标对象 target
  var target = arguments[0];
  for (var i = 1; i < len; i++) {
    var currentObject = arguments[i];
    for (var key in currentObject) {
      target[key] = currentObject[key];
    }
  }

  return target;
}

// 上节中写 type 函数时，用来存放 toString 映射结果的对象
var class2type = {};

// 相当于 Object.prototype.toString
var toString = class2type.toString;

// 相当于 Object.prototype.hasOwnProperty
var hasOwn = class2type.hasOwnProperty;

function isPlainObject(obj) {
  var proto, Ctor;

  // 排除掉明显不是obj的以及一些宿主对象如Window
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }

  /**
   * getPrototypeOf es5 方法，获取 obj 的原型
   * 以 new Object 创建的对象为例的话
   * obj.__proto__ === Object.prototype
   */
  proto = Object.getPrototypeOf(obj);

  // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
  if (!proto) {
    return true;
  }

  /**
   * 以下判断通过 new Object 方式创建的对象
   * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
   * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
   */
  Ctor = hasOwn.call(proto, "constructor") && proto.constructor;

  // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
  return (
    typeof Ctor === "function" &&
    hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
  );
}

function extend() {
  // 是否深拷贝，默认为 false
  var deep = false;
  var clone;
  var target = arguments[0];
  var i = 1;

  // 如果第一个参数是布尔值，表示为是否深拷贝的标识
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[i];
    i++;
  }

  // 如果 target 不是对象或者为 null、undefind，是无法复制的，所以设为 {}
  // 兼容函数
  if (
    (typeof target !== "object" && typeof target !== "function") ||
    target == null
  ) {
    target = {};
  }

  for (; i < arguments.length; i++) {
    var currentObj = arguments[i];
    for (var key in currentObj) {
      // 目标属性
      var src = target[key];
      // 要复制的属性
      var copy = currentObj[key];

      // 相等则跳过，解决循环引用问题
      if (target === copy) {
        continue;
      }

      if (deep && typeof copy === "object") {
        if (Array.isArray(copy)) {
          clone = Array.isArray(src) ? src : [];
        } else {
          clone = isPlainObject(src) ? src : {};
        }
        // 递归调用
        target[key] = extend(deep, clone, copy);
      } else {
        target[key] = copy;
      }
    }
  }

  return target;
}
