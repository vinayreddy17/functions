// Anonymous Function
const findMedian = function(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  // pushing the remaining elements in the array1 to merged array
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    const midIndex = Math.floor(mergedArray.length / 2);
  
    if (mergedArray.length % 2 === 0) {
      const median = (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
      console.log(median);
    } else {
      console.log(mergedArray[midIndex]);
    }
  };
  
  // IIFE
  (function(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    const midIndex = Math.floor(mergedArray.length / 2);
  
    if (mergedArray.length % 2 === 0) {
      const median = (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
      console.log(median);
    } else {
      console.log(mergedArray[midIndex]);
    }
  })([1, 3, 5], [2, 4, 6]);

  findMedian([1, 3, 5], [2, 4, 6]);
  