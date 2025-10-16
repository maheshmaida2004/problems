let getCountDigit = function (number) {
  let count = 0;
  while (number > 0) {
    const digit = number % 10;
    count++;
    number = Math.floor(number / 10);
  }
  return count;
};
let result = getCountDigit(545567);
console.log(result);
