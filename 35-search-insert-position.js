var searchInsert = function(nums, target) {
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] === target){
            i = j;
        }else if(target > nums[j]){
            i++;
        }
    }

    return i;
};

const nums = [1,3,5,6], target = 7;

console.log(searchInsert(nums, target));