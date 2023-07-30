// Anonymous Function
const sumArray = function(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    console.log(sum);
  };
  
  // IIFE
  (function(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    console.log(sum);
  })([1, 2, 3, 4, 5]);