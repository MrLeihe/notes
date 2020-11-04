// 重写函数实现惰性
function lazy() {
  var t = new Date();
  lazy = function () {
    return t;
  };
  return lazy();
}

var lazy = (function () {
  var t = new Date();
  return function () {
    return t;
  };
})();
