var lengthOfLastWord = function(s) {
    const lastWord = s.split(" ").filter(item => item);
    return lastWord[lastWord.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
