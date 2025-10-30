let arr = [1, 1, 2];
let i = 0;
let j = 0;
let k = 1;
while (i < arr.length) {
  if (arr[i] !== arr[j]) {
    arr[j + 1] = arr[i];
    k++;
    j++;
  }
  i++;
}
return k;
