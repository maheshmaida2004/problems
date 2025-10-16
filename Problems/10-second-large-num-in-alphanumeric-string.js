var secondHighest = function (array) {
  let i = 0;
  let largest = -Infinity;
  let secondLrg = -Infinity;
  let numArray = [];

  while (i < array.length) {
    const element = array[i];
    const number = Number(element);
    if (number === number) {
      numArray.push(number);
    }
    i++;
  }
  console.log(numArray);

  let j = 0;
  while (j < numArray.length) {
    const element = numArray[j];

    if (element > largest) {
      secondLrg = largest;
      largest = element;
    } else if (element < largest && element > secondLrg) {
      secondLrg = element;
    }
    j++;
  }
  if (secondLrg === -Infinity) {
    return -1;
  }

  return secondLrg;
};
let result = secondHighest("ck077");
console.log(result);
