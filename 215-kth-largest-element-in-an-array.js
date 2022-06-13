


const findkthLargest = (nums, k) => {
    for (var i = 0; i < k; i++) {
        var max_index = i,
          tmp = nums[i];
    
        for (var j = i + 1; j < nums.length; j++) {
          if (nums[j] > nums[max_index]) {
            max_index = j;
          }
        }
    
        nums[i] = nums[max_index];
        nums[max_index] = tmp;
      }

      return nums[k-1]
}

console.log(findkthLargest([3,2,1,5,6,4], 2))