var isPowerOfFour = function(n) {

    if(n < 1) return false;
    if(n === 1) return true;
    
    let result = true;
    if(n % 4 === 0){
        if(n > 4){
            result = isPowerOfFour(n / 4)
        }
    }else{
        result = false;
    }

    return result;
};

console.log(isPowerOfFour(5))