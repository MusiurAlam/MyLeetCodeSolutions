var longestOnes = function (nums, k) {
  let max = 0;
  let counter1 = 0;
  let counter0 = 0;

  if (nums.length) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        if (counter1 > 0 && max > 0) {
          if (counter0 < k) {
            counter1 = counter0 + max;
          } else {
            counter0 = 0;
          }
        }
      } else {
        counter1++;

        if (counter1 > max) {
          max = counter1;
        }
      }

      console.log({
          i,
          num: nums[i],
          counter0,
          counter1,
          max
      })
    }
  }

  return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
