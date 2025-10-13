let array = [5, 2, 3, 4, 7, 8];
let largestElement = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element > largestElement) {
    largestElement = element;
  }
}
console.log(largestElement);
