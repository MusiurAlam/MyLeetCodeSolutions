
var reverseWords = function(s) {
    let arr = s.split(" ");
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].split("").reduce((acc, char) => char + acc, "");
    }
    let answer = "";
    for(let i = 0; i < arr.length; i++){
        answer = answer+ " "+ arr[i]
    }
    return answer.trim();
};

console.log(reverseWords("Hello World!"))