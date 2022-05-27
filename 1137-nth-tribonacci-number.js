var tribonacci = function(n) {
    let t0 = 0, t1 = 1, t2 = 1;

    if(n === 0) return t0;
    if(n === 1) return t1;
    if(n === 2) return t2;

    for(let i = 2; i < n; i++){
        let temp0 = t2, temp1 = t1;
        t2 = t0 + t1 + t2;
        t1 = temp0;
        t0 = temp1;
    }

    return t2;
};

console.log(tribonacci(0))