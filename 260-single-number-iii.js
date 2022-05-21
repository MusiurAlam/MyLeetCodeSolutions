var singleNumber = function (nums) {
  let result = [];
  if (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      let counter = 1;

      if(result.length > 2){
          break;
      }

      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          if (nums[i] === nums[j]) {
            counter++;
            break;
          }
        }
      }
      if (counter === 1) {
        result.push(nums[i]);
      }
    }
  } else {
    result.push(nums[0]);
    
  }

  return result;
};

console.log(singleNumber([-1,0]))
