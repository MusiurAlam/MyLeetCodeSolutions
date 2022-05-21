var searchRange = function(nums, target) {
    let positions = [-1, -1];

    if(nums){
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === target){
                if(positions[0] === -1){
                    positions[0] = i;
                    positions[1] = i;
                }else{
                    positions[1] = i;
                }
            }
        }
    }

    return positions
};

console.log(searchRange([], 1))