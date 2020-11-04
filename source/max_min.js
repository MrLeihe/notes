// 使用 Math.max
function max(arr) {
  return Math.max(...arr);
}

function max(arr) {
  return Math.max.apply(null, arr);
}

// 遍历
function max(arr) {
  if (!arr || !arr.length) {
    return arr;
  }

  var maxValue = Number(arr[0]);
  for (var i = 1; i < arr.length; i++) {
    var target = Number(arr[i]);
    if (!target) {
      continue;
    }

    if (maxValue < target) {
      maxValue = target;
    }
  }

  return maxValue;
}
