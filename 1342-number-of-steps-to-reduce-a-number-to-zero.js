var numberOfSteps = function(num) {
    if(num === 0) return 0;
    let counter = 1;

    const reducer = () => {
        
        if(num % 2 === 0){
            num /= 2;
        }else{
            num--;
        }

        if(num > 0){
            counter++;
            reducer();
        }
    }

    reducer();

    return counter;
};

console.log(numberOfSteps(3));