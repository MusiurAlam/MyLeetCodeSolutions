/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    word1 = word1.toString().replaceAll(",", "");
    word2 = word2.toString().replaceAll(",", "");
    if(word1 === word2){
        return true;
    }else{
        return false;
    }
};