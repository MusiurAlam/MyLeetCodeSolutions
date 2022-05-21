var intersection = function (nums1, nums2) {
  let common = [];

  const pusher = (arr, item, times) => {
    for(let k = 0; k < times; k++){
        arr.push(item);
    }

    return arr;
  }

  const occurance = (arr, num) => {
      let laps = 0;
      for(let i = 0; i < arr.length; i++){
          if(arr[i] === num){
              laps += 1;
          }
      }
    return laps;
  }

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (!common.includes(nums1[i])) {
            let laps1 = occurance(nums1, nums1[i]);
            let laps2 = occurance(nums2, nums1[i]);

            if(laps1 > laps2){
                common = pusher(common, nums1[i], laps2);
            }else{
                common = pusher(common, nums1[i], laps1);
            }
        }
      }
    }
  }

  return common;
};

const nums1 = [1,2,2,1],
  nums2 = [9, 4, 9, 8, 4, 2, 2, 2];

console.log(intersection(nums1, nums2));
