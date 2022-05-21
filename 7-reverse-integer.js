var reverse = function (x) {
  let nums;
  let sign = x > 0 ? "+" : "-";

  x = Math.abs(x).toString();
  let numberLength = x.toString().length;

  for (let i = numberLength - 1; i >= 0; i--) {
    nums += x[i];
  }

  let result = parseInt(nums.replaceAll("undefined", "")).toString();

  result = sign === "-" ? sign + result: result;
  return parseInt(result);
};

console.log(reverse(1534236469));
