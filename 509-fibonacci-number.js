var fib = function(n) {
    if(n === 0) return 0;
    let n1 = 0, n2 = 1;

    for(let i = 1; i < n; i++){
        let temp = n2;
        n2 = n1 + n2;
        n1 = temp;
    }

    return n2;
};

console.log(fib(3))