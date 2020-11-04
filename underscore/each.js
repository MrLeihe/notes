function each(obj, callback) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break;
      }
    }
  } else {
    for (var key in obj) {
      if (callback.call(obj[key], key, obj[key]) === false) {
        break;
      }
    }
  }
}
