function mergeSort(sortA, sortB) {
  let dum = [];

  while (sortA.length && sortB.length) {
    if (sortA[0] < sortB[0]) {
      dum.push(sortA.shift());
    } else {
      dum.push(sortB.shift());
    }
  }

  console.log("sortA---", sortA);
  console.log("sortB---", sortB);

  dum = dum.concat(sortA.length ? sortA : sortB);

  return dum;
}

function mergeSort(sortA, sortB) {
  let dum = [];

  while (sortA.length && sortB.length) {
    if (sortA[0] < sortB[0]) {
      dum.push(sortA.shift());
    } else {
      dum.push(sortB.shift());
    }
  }

  while (sortA.length) {
    dum.push(sortA.shift());
  }

  while (sortB.length) {
    dum.push(sortB.shift());
  }

  return dum;
}
