function partial(fn, ...args) {
  return function (...args2) {
    return fn.call(this, ...args, ...args2);
  };
}

var _ = {};

function partial(fn, ...args) {
  return function (...args2) {
    var len = args.length,
      position = 0;
    for (var i = 0; i < len; i++) {
      args[i] = args[i] === _ ? args2[position++] : args[i];
    }

    while (position < args2.length) {
      args.push(args2[position++]);
    }

    return fn.apply(this, args);
  };
}
