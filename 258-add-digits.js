var addDigits = function (n) {
    let counter = 0;
    const returnSum = (num) => {
      num = num.toString();
      let rResult = 0;
  
      for (let i = 0; i < num.length; i++) {
        //   console.log(num, num[i]);
        rResult = rResult + parseInt(num[i]);
      }
  
      if (rResult < 10) {
        return rResult;
      } else {
        if (counter > 100) {
          return false;
        } else {
          counter++;
          return returnSum(rResult);
        }
      }
    };
  
    if (n < 1) {
      return false;
    } else {
      return returnSum(n);
    }
  };
  
  console.log(addDigits(38));
  