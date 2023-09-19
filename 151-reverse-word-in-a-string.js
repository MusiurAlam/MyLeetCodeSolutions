/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").reduce((a, b) => b.trim() + " " +a.trim()).trim();
};