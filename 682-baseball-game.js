var calPoints = function(ops) {
    let record = [];

    for(let i = 0; i < ops.length; i++){
        if(ops[i] === "C"){
            if(record.length){
                record.pop();
            }
        }else if(ops[i] === "D"){
            if(record.length >= 1){
                record.push(2 * record[record.length - 1]);
            }
        }else if(ops[i] === "+"){
            if(record.length >= 2){
                record.push(record[record.length - 1] + record[record.length - 2]);
            }
        }else{
            record.push(parseInt(ops[i]));
        }

        // console.log(record)

    }


    let result = 0;
    for(let i = 0; i < record.length; i++){
        result += record[i];
    }

    return result;
};

console.log(calPoints(["1","C"]))