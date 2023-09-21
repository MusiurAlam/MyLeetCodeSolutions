function backspaceCompare(s, t) {
    function processString(str) {
      const stack = [];
      for (let char of str) {
        if (char === '#') {
          stack.pop();
        } else {
          stack.push(char);
        }
      }
      return stack.join('');
    }
  
    const processedS = processString(s);
    const processedT = processString(t);
    return processedS === processedT;
  }


console.log(backspaceCompare("c##vnvr", "#c##vnvr"));
console.log(backspaceCompare("a#", "c#"));
console.log(backspaceCompare("ab##", "a###b##"));
console.log(backspaceCompare("ab#c", "ad#c"));
