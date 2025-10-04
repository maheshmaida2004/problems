let checkArmstrong = function (number) {
  let dublicate = number;
  let cube = 0;
  while (number > 0) {
    const digit = number % 10;
    cube += digit ** 3;

    number = Math.trunc(number / 10);
  }

  if (dublicate === cube) {
    return true;
  } else {
    return false;
  }
};
let result = checkArmstrong(372);
console.log(result);
