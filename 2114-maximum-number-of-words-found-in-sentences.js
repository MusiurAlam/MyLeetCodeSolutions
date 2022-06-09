var mostWordsFound = function(sentences) {
    let sentences = sentences.map(item => item.split(" "));

    return sentences;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))