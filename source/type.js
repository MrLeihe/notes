// 判断类型
var class2Type = {};

"Boolean Number String Function Array Date RegExp Object Error"
  .split(" ")
  .forEach((item) => {
    class2Type[`[object ${item}]`] = item.toLowerCase();
  });

function type(obj) {
  if (typeof obj === "object" || typeof obj === "function") {
    return class2Type[Object.prototype.toString.call(obj)];
  }

  return typeof obj;
}

// 判断是否是空对象
function isEmptyObject(obj) {
  for (var a in obj) {
    return false;
  }

  return true;
}

// 判断是否是 window 对象
function isWindow(obj) {
  return obj != null && obj === obj.window;
}

// 判断是否是数组和类数组
function isArrayLike(obj) {
  // 必须有 length 属性
  var length = !!obj && "length" in obj && obj.length;

  // 过滤函数和 window
  var typeRes = type(obj);
  if (typeRes === "function" || isWindow(obj)) {
    return false;
  }

  return (
    typeRes === "array" ||
    length === 0 ||
    (typeof length === "number" && length > 0 && length - 1 in obj)
  );
}
