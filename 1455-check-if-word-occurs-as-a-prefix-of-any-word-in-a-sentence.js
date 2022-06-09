
var isPrefixOfWord = function(sentence, searchWord) {
    let words = sentence.split(" ");
    for(let i = 0; i < words.length; i++){
        let currentWord = words[i];
        let sliceFromCW = currentWord.slice(0, searchWord.length);

        if(sliceFromCW === searchWord){
            return i + 1;
        }
    }

    return -1;
    
};

console.log(isPrefixOfWord("this problem is an easy problem", "pro"))