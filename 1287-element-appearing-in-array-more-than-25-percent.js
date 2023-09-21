var findSpecialInteger = function (arr) {
  let temp = {};
  let percentToAdd = 100 / arr.length;
  for (let i = 0; i < arr.length; i++) {
    temp[arr[i]] = temp[arr[i]] ? temp[arr[i]] + percentToAdd : percentToAdd;
    if(temp[arr[i]] > 25){
        return arr[i];
    }
  }
};

console.log(findSpecialInteger((arr = [1, 2, 2, 6, 6, 6, 6, 7, 10])));
