var missingNumber = function(nums) {
    let max = Math.max(...nums);
    for(let i = 0; i < max; i++){
        if(nums.indexOf(i) === -1){
            return i;
        }
    }

    return max + 1;
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))