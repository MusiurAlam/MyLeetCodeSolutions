var intersection = function (nums1, nums2) {
  let common = [];

  if (nums1.length !== nums2.length) {
    let firstNums = nums1;
    let secondNums = nums2;

    if (nums1.length < nums2.length) {
      firstNums = nums2;
      secondNums = nums1;
    }

    for (let i = 0; i < secondNums.length; i++) {
      if (firstNums.includes(secondNums[i])) {
        common.push(secondNums[i]);
      }
    }
  } else {
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
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

const nums1 = [1, 2, 2, 1],
  nums2 = [9, 4, 9, 8, 4, 2, 2, 2];

console.log(intersection(nums1, nums2));
