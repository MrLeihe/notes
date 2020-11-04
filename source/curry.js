function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    var arg2 = args.concat([].slice.call(arguments));
    return fn.apply(this, arg2);
  };
}

function curry(fn, length) {
  // 参数长度
  length = length || fn.length;

  return function () {
    // 判断参数是否达到要求
    if (arguments.length < length) {
      var combine = [fn].concat([].slice.call(arguments));
      return curry(sub_curry.apply(this, combine), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

function curry(fn, ...args) {
  console.log(args);
  if (fn.length <= args.length) {
    return fn.apply(this, args);
  }

  return function (...args2) {
    return curry(fn, ...args, ...args2);
  };
}

function add(a, b, c) {
  return a + b + c;
}

// 返回了一个函数
var foo = curry(add);

foo(1)(2)(3);

// 执行 foo(1)，因为参数长度小于形参 length，返回了一个函数来处理剩余的参数
foo(1);

// 此时
// return function(...args2) {
//   return curry(fn, 1, ...args2)
// }

foo(1)(2);

// 此时
// return function(...args2) {
//   return curry(fn, 1, 2, ...args2)
// }

foo(1)(2)(3);

// 此时满足参数条件，会执行 fn
fn.apply(this, [1, 2, 3]); // 6
