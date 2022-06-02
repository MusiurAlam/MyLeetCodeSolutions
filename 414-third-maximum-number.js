const sort = (arr) => {
    return arr.sort(function(a, b) {
        return b - a;
    });
}

const uniques = (arr) => {
    let r = [];
    arr.forEach(element => {
       !r.includes(element) && r.push(element) 
    });

    return r;
}

var thirdMax = function(nums) {
    let r = sort(uniques(nums));
    if(r.length < 3) return Math.max(...r);

    return r[2];
};

console.log(thirdMax([1, 2, 4, 2, 1]));