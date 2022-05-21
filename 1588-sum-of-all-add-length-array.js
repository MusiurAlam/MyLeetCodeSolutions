var sumOddLengthSubarrays = function (arr) {
  const getAllSubsets = (theArray) =>
    theArray.reduce(
      (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
      [[]]
    );

  const allSubsets = getAllSubsets(arr);

  let sum = 0;
  for(let i = 0; i < allSubsets.length; i++){
      if(allSubsets[i].length % 2 !== 0){
          let temp = allSubsets[i];
          console.log(temp)
          for(let j = 0; j < temp.length; j++){
              sum += temp[j];
          }
      }
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
