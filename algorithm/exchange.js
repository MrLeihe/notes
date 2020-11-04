// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

// 示例：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4]
// 注：[3,1,2,4] 也是正确的答案之一。

function exchange(nums) {
  var len = nums.length;
  var prev = 0,
    cur = 0;

  while (cur < len) {
    var curNumber = nums[cur];
    var prevNumber = nums[prev];

    // cur 元素为奇数时
    if (curNumber % 2 !== 0) {
      // prev 元素为偶数时交换元素位置
      if (prevNumber % 2 === 0) {
        var temp = curNumber;
        nums[cur] = prevNumber;
        nums[prev] = temp;
      }
      // cur 元素为奇数时，不管 prev 元素是奇数还是偶数，最终都需要右移
      prev++;
    }

    cur++;
  }

  return nums;
}
