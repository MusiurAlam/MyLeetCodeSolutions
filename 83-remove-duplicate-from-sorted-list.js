var deleteDuplicates = function(head) {
    let result = [];
    if(head.length){
        for(let i = 0; i < head.length; i++){
            if(!result.includes(head[i])){
                result.push(head[i])
            }
        }
    }

    return result;
};

console.log(deleteDuplicates([1,1,2,3,3]))