var prefixCount = function(words, pref) {
    words = words.filter(item => item.includes(pref));
    let count = 0;
    for(let i = 0; i < words.length; i++){
        let currentWord = words[i];
        let sliceFromCW = currentWord.slice(0, pref.length);

        if(sliceFromCW === pref){
            count++;
        }
    }
    
    return count;
};

console.log(prefixCount(["pay","aention","practiceat","attend"], "at"))