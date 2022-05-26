var reverseBits = function(n) {
    var digit = n.toString(2).split('').reverse();

    return parseInt(digit, 2);
};

console.log(reverseBits(00000010100101000001111010011100))