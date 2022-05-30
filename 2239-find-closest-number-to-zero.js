var findClosestNumber = function (nums) {
  let temp = [];

  for(let i = 0; i < nums.length; i++){
    temp.push(Math.abs(nums[i]))
  }

  let shortest = Math.min(...temp);

  let shortests = [...nums.filter(item => Math.abs(item) === shortest)];

  let result = shortests[0];

  for(let i = 0; i < shortests.length; i++){
      if(shortests[i] > 0){
          return shortests[i]
      }else{
          result = shortests[i]
      }
  }

  return result;
};

console.log(findClosestNumber([-10, 10, -2, -10]));
