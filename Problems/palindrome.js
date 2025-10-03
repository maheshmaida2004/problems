let palindrome = function (palin) {
  let min = 0;
  let num = palin;
  let reverseDigit = 0;
  while (palin > min) {
    const digit = palin % 10;
    reverseDigit = reverseDigit * 10 + digit;
    palin = Math.floor(palin / 10);
  }

  if (reverseDigit === num) {
    return true;
  } else {
    return false;
  }
};
let result = palindrome(121);
console.log(result);
