var reverseString = function(s) {
    let result = [];
    let i = 0;
    while(i < s.length){
        result = [s[i], ...result];
        i++;
    }

    return result;
};

console.log(reverseString(["h","e","l","l","o"]));