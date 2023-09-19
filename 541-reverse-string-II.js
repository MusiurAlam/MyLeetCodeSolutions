var reverseStr = function (s, k) {
  s = s.split("");
  let arr = [];
  let tempWord = "";
  let add = true;
  for (let i = 0; i < s.length; i++) {
    if (tempWord.length < k) {
      if (add) {
        tempWord = s[i] + tempWord;
      } else {
        tempWord += s[i];
      }
    }
    if (tempWord.length === k) {
      arr.push(tempWord);
      tempWord = "";
      if (add) {
        add = false;
      } else {
        add = true;
      }
    }
  }
  arr.push(tempWord)
  return arr.join("");
};
console.log(reverseStr("abcdefgh", 3));
