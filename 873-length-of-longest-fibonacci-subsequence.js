var lenLongestFibSubseq = function(arr) {
    let prevSum = arr[0] + arr[1];
    let prevDigit = arr[1];
    let counter = 2;

    for(let i = 2; i < arr.length; i++){
        if(arr[i] === prevSum){
            prevSum = arr[i] + prevDigit;
            prevDigit = arr[i]
            counter++;

            console.log(arr[i])
        }
    }

    return counter;
};

console.log(lenLongestFibSubseq([1,3,7,11,12,14,18]))