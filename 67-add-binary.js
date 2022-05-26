var addBinary = function (a, b) {
  let sum = [];
  let carry = "0";
  let loopTimes = a.length > b.length ? a.length : b.length;

  sum.length = loopTimes;

  for (let i = 0; i < loopTimes; i++) {
    const num1 = a[a.length - 1];
    const num2 = b[b.length - 1];
    //a = 0, b = 0, then, sum = 0
    if (num1 === "0" && num2 === "0") {
      if (carry === "0") {
        sum[loopTimes - i] = "0";
      }
      if (carry === "1") {
        sum[loopTimes - i] = "1";
      }
      console.log("Entered 0 0");
    } else if (num1 === "1" && num2 === "0") {
      if (carry === "0") {
        sum[loopTimes - i] = "1";
      }
      if (carry === "1") {
        sum[loopTimes - i] = "0";
        carry === "1";
      }

      console.log("Entered 1 0");
    } else if (num1 === "0" && num2 === "1") {
      if (carry === "0") {
        sum[loopTimes - i] = "1";
      }
      if (carry === "1") {
        sum[loopTimes - i] = "0";
        carry === "1";
      }

      console.log("Entered 0 1");
    } else if (num1 === "1" && num2 === "1") {
      if (carry === "0") {
        sum[loopTimes - i] = "0";
        carry = "1";
      }
      if (carry === "1") {
        sum[loopTimes - i] = "1";
        carry = "1";
      }
      console.log("Entered 1 1");
    }

    console.log({ a: num1, b: num1, sum: sum[loopTimes - i], sum, carry });
  }

  const resultSum = sum.toString().replaceAll(",", "");
  return carry === "0" ? resultSum : carry + resultSum;
};

const a = "1010",
  b = "1011";

console.log(addBinary(a, b));
