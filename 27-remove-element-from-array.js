var removeElement = function(nums, val) {
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== val){
            nums[i] = nums[j];
            i++;
        }
    }
    nums.length = i;

    return i;
};

const nums = [0,1,2,2,3,0,4,2];
const val = 2;

const nums1 = [3,2,2,3];
const val1 = 3;

console.log(removeElement(nums, val));
console.log(removeElement(nums1, val1));