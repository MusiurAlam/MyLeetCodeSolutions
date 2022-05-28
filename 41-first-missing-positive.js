var firstMissingPositive = function (nums) {
  let max = Math.max(...nums);
  let inn = false;
  let ipn = false;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      inn = true;
    }
    
    if (nums[i] > 0) {
      ipn = true;
    }
  }

  if (inn) {
    if (ipn) {
      for (let i = 1; i < max; i++) {
        if (i < 1) {
          continue;
        } else {
          if (nums.indexOf(i) === -1) {
            return i;
          }
        }
      }
    } else {
      return 1;
    }
  } else {
    for (let i = 1; i < max; i++) {
      if (i < 1) {
        continue;
      } else {
        if (nums.indexOf(i) === -1) {
          return i;
        }
      }
    }
  }

  return max + 1;
};

console.log(firstMissingPositive([0, -1, 3, 1]));
