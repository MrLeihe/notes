function flatten(arr) {
  var flatArr = [];
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (Array.isArray(item)) {
      flatArr = flatArr.concat(flatten(item));
    } else {
      flatArr.push(item);
    }
  }

  return flatArr;
}

var arr = [1, [2, [3, 4]]];

function flatten(arr) {
  return arr
    .toString()
    .split(",")
    .map(function (item) {
      return +item;
    });
}

function flatten(arr) {
  return arr.reduce((prev, next) => {
    return prev.concat(Array.isArray(next) ? flatten(next) : next);
  }, []);
}
