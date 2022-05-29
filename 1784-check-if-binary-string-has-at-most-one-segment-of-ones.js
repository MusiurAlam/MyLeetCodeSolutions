

var findMaxConsecutiveDigit = function (nums, digit) {
    let max = 0;
    let counter = 0;
  
    if (nums.length) {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] === digit) {
          counter++;
          if (counter > max) {
            max = counter;
          }
        } else {
          counter = 0;
        }
      }
    }
  
    return max;
  };
  
  var checkOnesSegment = function (s) {
    let nums = s.toString().split("");
  
    for (let i = 0; i < nums.length; i++) {
      nums[i] = parseInt(nums[i]);
    }
  
    let ones = findMaxConsecutiveDigit(nums, 1);
    let zeros = findMaxConsecutiveDigit(nums, 0);
  
    if (ones >= zeros) {
      return true;
    } else {
      return false;
    }
  };

  console.log(checkOnesSegment("10"))