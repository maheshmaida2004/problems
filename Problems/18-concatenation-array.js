let arr = [1, 3, 2, 1];
let i = 0;

let n = arr.length;
while (i < n) {
  arr.push(arr[i]);
  i++;
}
return arr;
console.log(arr);
