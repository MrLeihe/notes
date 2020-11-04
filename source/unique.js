// 暴力 for 循环
function unique(arr) {
  let uniqueArr = [];
  let isUnique;
  for (let i = 0; i < arr.length; i++) {
    isUnique = true;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

// indexOf
function unique(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

// filter 简化
function unique(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

function unique(arr) {
  return Array.from(new Set(arr));
}

function unique(arr) {
  return [...new Set(arr)];
}

function unique(arr) {
  let map = new Map();
  return arr.filter((item, index) => {
    return !map.has(item) && map.set(item, index);
  });
}
