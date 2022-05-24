var majorityElement = function (nums) {
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    if (Object.keys(result).includes(nums[i].toString())) {
      result = {
        ...result,
        [nums[i].toString()]: [...result[nums[i].toString()], nums[i]],
      };
    } else {
      result = { ...result, [nums[i].toString()]: [nums[i]] };
    }
  }

  const values = Object.values(result);
  let maxLength = values[0].length;
  let resultIndex = 0;
  for(let i = 0; i < values.length; i++){
    if(values[i].length > maxLength){
        maxLength = values[i].length;
        resultIndex = i;
    }
  }
  return values[resultIndex][0];
};

console.log(majorityElement([3,2,3]));
