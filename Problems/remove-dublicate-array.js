function remove(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
}
let res = remove([1, 1, 2]);
console.log(res);
