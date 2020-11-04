// 阶乘
// 算 n 的阶乘(假设n不为0)
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 斐波拉契数列
// 斐波那契数列的是这样一个数列：1、1、2、3、5、8、13、21、34....，即第一项 f(1) = 1,
// 第二项 f(2) = 1.....,第 n 项目为 f(n) = f(n-1) + f(n-2)。求第 n 项的值是多少。
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// 先递再归
n = 3;
fib(3);
fib(2) + fib(1);
fib(1) + fib(0) + fib(1);
1 + 0 + 1;
1 + 1;
2;

// 青蛙跳台阶问题
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
function foo(n) {
  if (n <= 2) {
    return n;
  }
  return foo(n - 1) + foo(n - 2);
}

// 递归的优化
let map = new Map();

function fib(n) {
  if (n < 2) {
    return n;
  }

  console.log("map:", map);

  if (!map.has(n)) {
    map.set(n, fib(n - 1) + fib(n - 2));
  }

  return map.get(n);
}

// 迭代法
function foo(n) {
  if (n < 2) {
    return n;
  }

  var prev = 0;
  var next = 1;
  var sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = prev + next;
    prev = next;
    next = sum;
  }
  return sum;
}

// 尾递归
function foo(count, pre, cur) {
  if (count <= 1) {
    return cur;
  }

  return foo(--count, cur, pre + cur);
}

foo(10, 0, 1);
