const findLCM = function (a, b) {
  let i = 1;
  let LCM = 0;
  let max = Math.max(a, b);

  while (true) {
    if (max % a === 0 && max % b === 0) {
      LCM = max;
      break;
    }
    max++;
  }

  return LCM;
};

let result = findLCM(18, 36);
console.log(result);
