let arr = [1, 2, 3, 4];
let size = arr.length;
let k = 2;
if (size > k) {
  k = k % size;
}

let rotate1 = arr.slice(size - k, size);
arr.unshift(...rotate1);
arr.length = size;

console.log(arr);
