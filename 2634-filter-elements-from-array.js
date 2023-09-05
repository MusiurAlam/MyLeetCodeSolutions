/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let tempArr = [...arr];
    let result = [];

    for(let i = 0; i < tempArr.length; i++){
        if(fn(tempArr[i], i)){
            result.push(tempArr[i]);
        }
    }

    return result;
};