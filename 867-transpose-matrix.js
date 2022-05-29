var transpose = function(matrix) {
    let result = [];

    for(let i = 0; i < matrix[0].length; i++){
        let temp = [];
        for(let j = 0; j < matrix.length; j++){
            temp.push(matrix[j][i])
        }
        result.push(temp);
        temp = [];
    }

    return result;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))