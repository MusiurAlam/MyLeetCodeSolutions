var sortArray = function (nums) {
    function partition(items, left, right) {
      let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
  
      while (i <= j) {
        while (items[i] < pivot) {
          i++;
        }
        while (items[j] > pivot) {
          j--;
        }
        if (i <= j) {
          [items[i], items[j]] = [items[j], items[i]];
          i++;
          j--;
        }
      }
      return i;
    }
  
    function quickSort(items, left, right) {
      let index;
  
      if (items.length > 1) {
        index = partition(items, left, right);
  
        if (left < index - 1) {
          quickSort(items, left, index - 1);
        }
  
        if (index < right) {
          quickSort(items, index, right);
        }
      }
  
      return items;
    }
    if(!nums){
        return [];
    }
  
    const result = nums.length > 1 ? quickSort(nums, 0, nums.length - 1) : nums;
  
    return result;
  };

var targetIndices = function(nums, target) {
    let sortedNums = sortArray(nums);
    let result = [];
    for(let i = 0; i < sortedNums.length; i++){
        if(sortedNums[i] === target){
            result.push(i);
        }
    }

    return result;
};

console.log(targetIndices([1,2,5,2,3], 2))