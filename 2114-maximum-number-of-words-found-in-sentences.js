var mostWordsFound = function(sentences) {
    sentences = sentences.map(item => item.split(" ").length);

    let max = 0;
    for(let i = 0; i < sentences.length; i++){
        if(sentences[i] > max){
            max = sentences[i]
        }
    }

    return max;
};

console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))