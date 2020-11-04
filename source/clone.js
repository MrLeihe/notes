function shallowCopy(obj) {
  // 不是对象
  if (typeof obj !== "object") return;

  // 判断是数组还是普通对象
  var newObj = obj instanceof Array ? [] : {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

function deepCopy(obj) {
  // 不是对象
  if (typeof obj !== "object") return;

  // 判断是数组还是普通对象
  var newObj = obj instanceof Array ? [] : {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }

  return newObj;
}
