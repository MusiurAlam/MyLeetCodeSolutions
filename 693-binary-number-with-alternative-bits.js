var hasAlternatingBits = function(n) {
    let bi = n.toString(2).split("");

    let prevBit = bi[0] === "0" ? "1" : "0";
    let result = true;
    for(let i = 0; i < bi.length; i++){
        if(bi[i] === prevBit){
            // result = false;
            return false;
        }else{
            prevBit = bi[i];
            // result = true;
        }
    }

    return result;
};

console.log(hasAlternatingBits(11))