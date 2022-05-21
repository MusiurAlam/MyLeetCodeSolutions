var removeDuplicates = function(nums) {
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            nums[++i] = nums[j]
        }
    }
    nums.length = i + 1;
    return nums;
};


const num1 = [1,1,2];
const num2 = [0,0,1,1,1,1,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(num1))



