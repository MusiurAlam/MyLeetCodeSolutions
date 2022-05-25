function prime_factors(num) {
    function is_prime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++)
      {
        if (num % i === 0) return false;
      }
      return true;
    }
    const result = [];
    for (let i = 2; i <= num; i++)
    {
      while (is_prime(i) && num % i === 0) 
      {
        if (!result.includes(i)) result.push(i);
        num /= i;
      }
    }
    return result;
}


var isUgly = function(n) {
    if(n < 1){
        return false;
    }
    let factors = prime_factors(n);
    let uglyFactors = [2, 3, 5];
    factors = factors.filter(num => !uglyFactors.includes(num));

    if(factors.length > 0) {
        return false;
    }else{
        return true;
    }
};
console.log(isUgly(14));