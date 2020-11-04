function shellSort(arr) {
  var len = arr.length;
  var prev, cur;

  // 定义间隔 gap
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 从第 gap 个元素开始，执行插入排序
    for (let i = gap; i < len; i++) {
      prev = i - gap;
      cur = arr[i];

      while (prev >= 0 && arr[prev] > cur) {
        arr[prev + gap] = arr[prev];
        prev -= gap;
      }

      arr[prev + gap] = cur;
    }
  }

  return arr;
}
