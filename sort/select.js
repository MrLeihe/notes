function selectionSort(arr) {
  // 找出最小（大）的元素，放到数组的起始位置
  // 再继续从剩余元素中找出最小（大）元素，放到已排序序列的末尾
  // 重复上面步骤，直到排序完毕

  let len = arr.length;
  let minIndex;

  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      // 查找最小元素索引
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // 交换 i 位置元素和 minIndex 元素的值
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}
