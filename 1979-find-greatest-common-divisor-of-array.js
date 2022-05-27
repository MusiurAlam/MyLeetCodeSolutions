var findGCD = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    let gcd = 1;
    let remained = 0;

    const gcdFinder = () => {
        let result = Math.floor(max / min);
        remained = max % min;

        if(remained === 0){
            gcd = min;
        }else {
            max = min;
            min = remained;
            remained = 0;

            gcdFinder();
        }
    }

    gcdFinder()

    return gcd;
};

console.log(findGCD([3,3]))