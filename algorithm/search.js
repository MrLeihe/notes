// 统计一个数字在排序数组中出现的次数。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0

var search = function (nums, target) {
  // 二分法查找数字在数组中的位置
  var position = -1;
  var left = 0,
    right = nums.length - 1;

  while (left <= right) {
    var middle = left + Math.floor((right - left) / 2);
    var item = nums[middle];

    if (item > target) {
      right = middle - 1;
    } else if (item < target) {
      left = middle + 1;
    } else {
      position = middle;
      break;
    }
  }

  // 出现次数为 0
  if (position === -1) {
    return 0;
  }

  // 双指针查找出现次数
  var prev = middle - 1,
    next = middle + 1;
  // 记录出现次数
  var count = 1;

  while (prev >= 0) {
    if (nums[prev] === target) {
      count++;
    }
    prev--;
  }

  while (next <= nums.length - 1) {
    if (nums[next] === target) {
      count++;
    }
    next++;
  }

  return count;
}[8];

// 查找左右边界
var search = function (nums, target) {
  // 搜索右边界
  var start = 0,
    end = nums.length - 1;
  while (start <= end) {
    var middle = Math.floor((start + end) / 2);
    if (nums[middle] <= target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  var right = start;

  // 没有查找到时，及时退出
  if ((end >= 0 && nums[end] !== target) || end < 0) {
    return 0;
  }

  // 查找左边界
  (start = 0), (end = nums.length - 1);
  while (start <= end) {
    var middle = Math.floor((start + end) / 2);
    if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  var left = end;

  return right - left - 1;
};

var helper = function (nums, target) {};
