var moveZeroes = function(nums) {

    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== 0){
            nums[i] = nums[j];
            i++;
        }
    }
    for(let k = i; k < nums.length; k++){
        nums[k] = 0;
    }

    return nums;
};

const nums = [0,1,0,3,12];

console.log(moveZeroes([0]));