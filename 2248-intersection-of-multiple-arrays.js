var intersection = function (nums) {
  const interSectionBetweenArray = (nums1, nums2) => {
    let common = [];

    if (nums1?.length !== nums2?.length) {
      let firstNums = nums1;
      let secondNums = nums2;

      if (nums1?.length < nums2?.length) {
        firstNums = nums2;
        secondNums = nums1;
      }

      for (let i = 0; i < secondNums?.length; i++) {
        if (firstNums.includes(secondNums[i])) {
          common.push(secondNums[i]);
        }
      }
    } else {
      for (let i = 0; i < nums1?.length; i++) {
        for (let j = 0; j < nums2?.length; j++) {
          if (nums1[i] === nums2[j]) {
            if (!common.includes(nums1[i])) {
              common.push(nums1[i]);
            }
          }
        }
      }
    }
    return common;
  };

  const SortNumbers = (items, left, right) => {
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

    return quickSort(items, left, right);
  };

  let result = [...interSectionBetweenArray(nums[0], nums[1])];

  if (nums.length > 1) {
    if (nums.length > 2) {
      for (let i = 2; i < nums.length; i++) {
        result = [...interSectionBetweenArray(result, nums[i])];
      }
    }
  } else {
    return SortNumbers(nums[0], 0, nums[0].length - 1);
  }
  result = SortNumbers(result, 0, result.length - 1);
  return result;
};

console.log(performance.now());
console.log(intersection([[44, 21, 48]]));
console.log(performance.now());
