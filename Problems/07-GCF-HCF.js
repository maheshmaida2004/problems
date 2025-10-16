const findGCD = function (a, b) {
  let i = 1;
  let HCF = 0;
  let limit = Math.min(a, b);
  while (i <= limit) {
    if (a % i === 0 && b % i === 0) {
      HCF = i;
    }
    i++;
  }
  return HCF;
};
let result = findGCD(3, 6);
console.log(result);
