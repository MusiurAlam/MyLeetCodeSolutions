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
  if (!nums) {
    return [];
  }

  const result = nums.length > 1 ? quickSort(nums, 0, nums.length - 1) : nums;

  return result;
};

var firstMissingPositive = function (nums) {
  

  let allPositives = [];

  nums?.forEach((num) => {
    if (num > 0) {
      allPositives.push(num);
    }
  });

  
  if (allPositives.length === 0) {
    return 1;
  }

  let sortedNums = sortArray(allPositives);

  const temps = sortedNums;

  sortedNums = [];

  temps.forEach((temp) => {
    !sortedNums.includes(temp) && sortedNums.push(temp)
  })


  console.log(sortedNums)
  if (sortedNums[0] > 1) {
    return 1;
  }

  for (let i = 0; i < sortedNums.length; i++) {
    const nextPostiveByI = sortedNums[i] + 1;
    const nextPositiveByIndex = sortedNums[i + 1];
    if (nextPostiveByI !== nextPositiveByIndex) {
      return sortedNums[i] + 1;
    }
  }
};

console.log(firstMissingPositive([]));
