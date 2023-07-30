// Anonymous Function
const rotateArray = function(arr, k) {
    const rotations = k % arr.length;
    for (let i = 0; i < rotations; i++) {
      arr.push(arr[i]);
    }
    arr.splice(0, rotations);
    console.log(arr);
  };
  
  // IIFE
  (function(arr, k) {
    const rotations = k % arr.length;
    for (let i = 0; i < rotations; i++) {
      arr.push(arr[i]);
    }
    arr.splice(0, rotations);
    console.log(arr);
  })([1, 2, 3, 4, 5], 2);
  