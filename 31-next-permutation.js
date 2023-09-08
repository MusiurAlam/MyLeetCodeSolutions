const swap = (nums, index1, index2) => {
  let temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
};

var nextPermutation = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  let i = nums.length - 2;

  for (; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      break;
    }
  }

  if (i >= 0) {
    let j = nums.length - 1;

    for (; j > i; j--) {
      if (nums[j] > nums[i]) {
        break;
      }
    }

    swap(nums, i, j);
  }

  // Reverse the subarray to the right of i
  for (let start = i + 1, end = nums.length - 1; start < end; start++, end--) {
    swap(nums, start, end);
  }

  return nums;
};

const inputArray = [1, 3, 2];
nextPermutation(inputArray);
console.log(inputArray);
