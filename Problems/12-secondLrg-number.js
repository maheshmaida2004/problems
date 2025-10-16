function getSecondLargest(array) {
  let largest = -Infinity;
  let secondLrg = -Infinity;
  let i = 0;

  while (i < array.length) {
    const element = array[i];

    if (element > largest) {
      secondLrg = largest;
      largest = element;
    } else if (element < largest && element > secondLrg) {
      secondLrg = element;
    }

    i++;
  }
  if (secondLrg === -Infinity) {
    return -1;
  }
  return secondLrg;
}
let result = getSecondLargest([0, 7, 7]);
console.log(result);
