function sortArray(arr) {
  let n = arr.length;
  for (let j = 0; j < n - 1; j++) {
    for (let i = 0; i < n - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }
  return arr;
}
let res = sortArray([7, 4, 2, 5, 9, 1]);
console.log(res);
