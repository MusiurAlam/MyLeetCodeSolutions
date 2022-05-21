var findMedianSortedArrays = function(nums1, nums2) {

    const SortNumbers = (items, left, right) => {
        function partition(items, left, right) {
            let pivot = items[Math.floor((right + left) / 2)],
              i = left,
              j = right;
        
            while (i <= j) {
              while (items[i] < pivot) {
                i++;
              }
              while (items[j] > pivot) {
                j--;
              }
              if (i <= j) {
                [items[i], items[j]] = [items[j], items[i]];
                i++;
                j--;
              }
            }
            return i;
          }
        
          function quickSort(items, left, right) {
            let index;
        
            if (items.length > 1) {
              index = partition(items, left, right);
        
              if (left < index - 1) {
                quickSort(items, left, index - 1);
              }
        
              if (index < right) {
                quickSort(items, index, right);
              }
            }
        
            return items;
          }
    
          return quickSort(items, left, right)
    }


    let mergedArray = [...nums1, ...nums2];

    mergedArray = SortNumbers(mergedArray, 0, mergedArray.length - 1);

    let arrayLength = mergedArray.length;

    if(arrayLength % 2 !== 0){
        return mergedArray[(arrayLength - 1) / 2]
    }else {
        let leftMedian = mergedArray[(arrayLength / 2) - 1];
        let rightMedian = mergedArray[arrayLength / 2];

        return (leftMedian + rightMedian) / 2;
    }
};

console.log(findMedianSortedArrays([2,4], [5,8]));


