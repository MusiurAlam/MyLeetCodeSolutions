/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let wordVowels = "";
    let arr = s.split("");
    for(let i = 0; i < arr.length; i++){
        if(vowels.includes(arr[i])){
            wordVowels = arr[i] + wordVowels;
            arr[i] = 404;
        }
    }
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 404){
            arr[i] = wordVowels[j]
            j++;
        }
    }
    let answer;
    for(let i = 0; i < arr.length; i++){
        if(answer){
            answer = answer + arr[i];
        }else{
            answer = arr[i]
        }
    }
    return answer
};
console.log(reverseVowels(".,"));