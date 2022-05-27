var isThree = function(n) {
    if(n < 4) return false;
    let counter = 2;

    for(let i = 2; i < n - 1; i++){
        if(n % i === 0){
            counter++;
        }
    }
    return counter === 3 ? true : false;
};

console.log(isThree(3))