function throttle(callback, wait) {
  let prev = 0;
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();

    if (now - prev > wait) {
      callback.apply(context, args);
      prev = now;
    }
  };
}

function throttle(callback, wait) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        timer = null;
        callback.apply(context, args);
      }, wait);
    }
  };
}
