
//not solved

var plusOne = function (digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    if (digits[i] === 9) {
      digits[i] = 0;

      let a ;
      if(digits.length > 1){
          a = plusOne(digits.slice(0, i));

      }
      if(digits.length === 1){
          digits[0] = 1;
          digits[1] = 0;
      }

      digits = a ? [...a, digits[i]] : digits;
    }
  }
  return digits;
};
const test1 = [
    5, 2, 2, 6, 5, 7, 1, 9, 0, 3, 8, 6, 8, 6, 5, 2, 1, 8, 7, 9, 8, 3, 8, 4, 7,
    2, 5, 8, 9,
  ]
console.log(
plusOne([99])
);
