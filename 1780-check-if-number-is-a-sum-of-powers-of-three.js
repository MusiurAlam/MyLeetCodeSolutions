var checkPowersOfThree = function(n) {

    if(n < 1) return false;
    if(n === 1) return true;
    
    let result = true;
    if(n % 3 === 0){
        if(n > 3){
            result = checkPowersOfThree(n / 3)
        }
    }else{
        result = false;
    }

    return result;
};