function arraySearch(arr, ele) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}
let res = arraySearch([1, 2, 3, 4], 7);
console.log(res);
