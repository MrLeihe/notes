// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

// 提示：

// 1 <= arr.length <= 10^5
// -100 <= arr[i] <= 100]

function maxSubArray(nums) {
  var len = nums.length,
    maxSum = nums[0];
  for (var i = 0; i < len; i++) {
    var sum = 0;
    for (var j = i; j < len; j++) {
      sum += nums[j];
      if (maxSum < sum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

/**
 * 动态规划，
 */
function maxSubArray(nums) {
  var dp = [nums[0]];
  var maxSum = dp[0];
  for (var i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i];
    } else {
      dp[i] = nums[i];
    }
    maxSum = Math.max(maxSum, dp[i]);
  }

  return maxSum;
}
