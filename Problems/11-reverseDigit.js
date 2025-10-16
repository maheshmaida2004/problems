var reverse = function (num) {
  let isNegative = num < 0;
  num = Math.abs(num);
  let reverseDigit = 0;

  while (num > 0) {
    const digit = num % 10;
    reverseDigit = reverseDigit * 10 + digit;
    num = Math.trunc(num / 10);
  }

  if (isNegative) {
    return -reverseDigit;
  } else {
    return reverseDigit;
  }
};

console.log(reverse(-3456));
console.log(reverse(7890));
