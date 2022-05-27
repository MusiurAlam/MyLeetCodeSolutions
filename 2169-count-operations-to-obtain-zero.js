var countOperations = function(num1, num2) {
    if(num1 === 0 || num2 === 0) return 0;
    let counter = 1;

    const reducer = () => {
        if(num1 > num2){
            num1 -= num2;
        }else if(num1 < num2){
            num2 -= num1;
        }else if(num1 === num2){
            num1 -= num2;
        }

        if(num1 !== 0){
            counter++;
            reducer(num1, num2);
        }
        
    }

    reducer();

    return counter;
};

console.log(countOperations(2,3))