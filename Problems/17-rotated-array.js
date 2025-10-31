function rotateArray(arr, k) {
  const n = arr.length;
  const reverse = (start, end) => {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  };
  k = k % n;
  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
  return arr;
}
let myArray = [1, 2, 3, 4, 5, 6, 7];
let rotated = rotateArray(myArray, 3);
console.log(rotated);
