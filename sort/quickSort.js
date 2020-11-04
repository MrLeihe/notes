function quickSort(arr) {
  return sort(arr, 0, arr.length - 1);
}

function sort(arr, left, right) {
  if (left < right) {
    let partitionIndex = partition(arr, left, right);
    sort(arr, left, partitionIndex - 1);
    sort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = left;
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
