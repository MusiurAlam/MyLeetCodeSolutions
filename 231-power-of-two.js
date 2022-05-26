function prime_factors(num) {
  function is_prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let i = 2; i <= num; i++) {
    while (is_prime(i) && num % i === 0) {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  return result;
}
var isPowerOfTwo = function (n) {
  if (n < 1) return false;
  if (n === 1) return true;

  let result = false;

  if (n % 2 === 0) {
    let factors = prime_factors(n);

    if (factors.length === 1 && factors[0] === 2) {
      result = true;
    } else {
      false;
    }
  } else {
    return false;
  }

  return result;
};

console.log(isPowerOfTwo(6));
