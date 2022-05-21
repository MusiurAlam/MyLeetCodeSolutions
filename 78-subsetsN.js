var subsets = function(nums) {
    let result = [[0]];
    let pushAmount = 1;

    for(let i = 0; i < nums.length; i++){
        result.push([nums[i]])
    }

    return result;
};

console.log(subsets([1, 2, 3]))