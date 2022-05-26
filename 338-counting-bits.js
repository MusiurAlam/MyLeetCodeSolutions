var countBits = function(n) {
    let res = [];
    for(let i = 0; i <= n; i++){
        res.push(i.toString(2).split("").filter((num) => num === "1").length);
    }
    return res;
};

console.log(countBits(5))