
const noduplicates = function(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < uniqueArray.length; j++) { //nested loop
        if (arr[i] === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArray.push(arr[i]);
      }
    }
    console.log(uniqueArray);
  };
  
  // IIFE
  (function(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArray.push(arr[i]);
      }
    }
    console.log(uniqueArray);
  })([1, 2, 2, 3, 4, 4, 5]);
  noduplicates([1, 2, 2, 3, 4, 4, 5]);
  