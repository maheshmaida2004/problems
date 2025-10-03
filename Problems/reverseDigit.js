var reverse = function (number) {
  let min = Number.MIN_VALUE;
  let num = Math.abs(number);
  let reverseDigit = 0;
  while (num > min) {
    const digit = num % 10;
    reverseDigit = reverseDigit * 10 + digit;

    num = Math.floor(num / 10);
  }
  return reverseDigit;
};
let result = reverse(-3456);
console.log(result);
