function bubbleSort(arr) {
  let len = arr.length;

  if (len < 2) {
    return arr;
  }

  for (let i = 0; i < len - 1; i++) {
    let swap = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    // 循环下来没有发生交换，说明此时已经排好序
    if (!swap) {
      return arr;
    }
  }
  return arr;
}

var arr = [18, 4, 2, 3, 10, 8, 1, 7];
bubbleSort(arr);

function bubbleSort(arr) {
  let point = arr.length - 1;

  // 每循环一次，point递减
  while (point > 0) {
    let swap = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (i >= point) {
        break;
      }

      count++;

      // 交换相邻两个元素
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }

    point--;

    // swap 为 false 时，退出循环
    if (!swap) {
      return arr;
    }
  }

  return arr;
}
