var check = function (array) {
  let n = array.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (array[i] > array[i + 1]) {
      count++;
    }
  }
  if (array[n - 1] > array[0]) {
    count++;
  }

  if (count <= 1) {
    return true;
  } else {
    return false;
  }
};
let result = check([3, 4, 5, 1, 2]);
console.log(result);
