function debounce(callback, wait, immediate) {
  var timer, result;

  var debounced = function () {
    var content = this;
    var args = arguments;

    if (timer) clearTimeout(timer);

    if (immediate) {
      let callNow = !timer;

      timer = setTimeout(() => {
        timer = null;
      }, wait);

      if (callNow) {
        result = callback.apply(content, args);
      }
    } else {
      timer = setTimeout(() => {
        callback.apply(content, args);
      }, wait);
    }

    return result;
  };

  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return debounced;
}
