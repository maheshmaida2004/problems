let arr = [0, 1, 2, 3, 0, 2, 1, 0];
let n = arr.length;
for (let j = 0; j < n - 1; j++) {
  for (let i = 0; i < n - 1 - j; i++) {
    if (arr[i] === 0) {
      let swap = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = swap;
    }
  }
}
console.log(arr);
