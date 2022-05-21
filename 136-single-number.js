var singleNumber = function (nums) {
  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      let counter = 1;

      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          if (nums[i] === nums[j]) {
            counter++;
            break;
          }
        }
      }
      if (counter === 1) {
        return nums[i];
      }
    }
  } else {
    return nums[0];
  }
};

console.log(singleNumber([4,0,1,0,1]));
