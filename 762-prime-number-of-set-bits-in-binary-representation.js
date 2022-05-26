const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

var countPrimeSetBits = function (left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    let temp = i.toString(2).split("");

    res.push(temp.filter((num) => num === "1").length);
  }
  return res.filter((num) => isPrime(num)).length;
};

console.log(countPrimeSetBits(10, 15));
