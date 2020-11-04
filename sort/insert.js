// 第一个元素作为有序序列，第二个到末尾元素作为待排序序列
// 扫描待排序元素，和有序序列从后开始向前比较，然后插入指定位置
function insertionSort(arr) {
  let prev, cur;
  for (let i = 1; i < arr.length; i++) {
    prev = i - 1;
    cur = arr[i];
    // 大于当前元素时，向后移
    while (prev >= 0 && cur < arr[prev]) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = cur;
  }

  return arr;
}
