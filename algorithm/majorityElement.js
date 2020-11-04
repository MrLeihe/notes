function majorityElement(arr) {
  var votes = 0,
    x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (votes === 0) {
      x = arr[i];
    }
    votes += x === arr[i] ? 1 : -1;
  }

  return x;
}

function majorityElement(nums) {
  var map = {},
    len = nums.length;

  for (var i = 0; i < len; i++) {
    var item = nums[i];
    map[item] = map[item] ? map[item] + 1 : 1;
    if (map[item] * 2 > len) {
      return item;
    }
  }

  return 0;
}
