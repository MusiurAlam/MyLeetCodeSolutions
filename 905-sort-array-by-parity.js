var sortArrayByParity = function(nums) {
    let evenNumbers = [], oddNumbers = [];

    for(let i = 0; i < nums.length; i++){
        let currentNum = nums[i];
        if(currentNum < 0){
            currentNum *= (-1);
        }
        if(currentNum % 2 === 0){
            evenNumbers.push(nums[i])
        }else{
            oddNumbers.push(nums[i])
        }
    }

    return [...evenNumbers, ...oddNumbers]
};

console.log(sortArrayByParity([-2,-5,1,-6]))