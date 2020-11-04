// 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
// 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

// 注意:
// 假设字符串的长度不会超过 1010。

// 示例 1:

// 输入:  "abccccdd"
// 输出: 7
// 解释: 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。

var longestPalindrome = function (s) {
  // 统计元素出现的次数
  var map = {},
    len = s.length;
  for (var i = 0; i < len; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }
  var longest = 0;
  for (var key in map) {
    longest += Math.floor(map[key] / 2) * 2;
  }

  return longest < len ? longest + 1 : longest;
};
