const stringToArray = (str) => {
    return str.split("");
}


var commonChars = function(words) {
    const WORDS = [];
    for(let i = 0; i < words.length; i++){
        WORDS.push(stringToArray(words[i]));
    }
    let firstWord = WORDS[0];
    let result = [];
    for(let i = 0; i < firstWord.length; i++){
        let temp = true;
        let curr = [firstWord[i]][0];

        for(let j = 0; j < WORDS.length; j++){
            let temp1 = WORDS[j];
            if(!temp1.includes(curr)){
                temp = false;
            }else{
                WORDS[j][temp1.indexOf(curr)] = "8"
            }
        }

        temp && result.push(curr)
    }

    return result;
};

console.log(commonChars(["cool","lock","cook"]))