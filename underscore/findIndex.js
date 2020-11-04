// 查找第一个
function findIndex(arr, callback, context) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function at Array");
  }

  for (var i = 0; i < arr.length; i++) {
    if (callback.call(context, arr[i], i, arr)) {
      return i;
    }
  }

  return -1;
}

// 查找最后一个
function findLastIndex(arr, callback, context) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function at Array");
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    if (callback.call(context, arr[i], i, arr)) {
      return i;
    }
  }

  return -1;
}

function createIndexFinder(dir) {
  return function (arr, callback, context) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function at Array");
    }

    var i = dir > 0 ? 0 : arr.length - 1;

    for (; i >= 0 && i < arr.length; i += dir) {
      if (callback.call(context, arr[i], i, arr)) {
        return i;
      }
    }

    return -1;
  };
}

function sortedIndex(arr, value) {}

function binarySearch(arr, value) {
  var left = 0,
    right = arr.length - 1;
  while (left <= right) {
    var middle = left + Math.floor((right - left) / 2);
    console.log(left, middle, right);
    if (arr[middle] < value) {
      left = middle + 1;
    } else if (arr[middle] > value) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
