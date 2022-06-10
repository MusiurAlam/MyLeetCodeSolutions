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
  
  var arrayRankTransform = function(arr) {
    let sortedArr = sortArray([...arr]);

    let sortedOBJ = {};

    for(let i = 0; i < sortedArr.length; i++){
      if(!Object.keys(sortedOBJ).includes(sortedArr[i].toString())){
        sortedOBJ[sortedArr[i].toString()] = i + 1;
      }
    }

    console.log({sortedArr, sortedOBJ, arr});

    for(let i = 0; i < arr.length; i++){
      let currentKey = arr[i].toString();

      let currentRank = sortedOBJ[currentKey];

      arr[i] = currentRank;
    }

    return arr;
};

console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))
  