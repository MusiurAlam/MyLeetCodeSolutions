var reversePrefix = function (word, ch) {
  let index;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      index = i;
      break;
    }
  }
  if (index) {
    let wordToReverse = word.slice(0, index + 1).split("").reduce((a, b) => b + a);
    let remainningWords = word.slice(index + 1);
    word = wordToReverse + remainningWords;
  }
  return word;
};

console.log(reversePrefix("abcdefd", "d"));
