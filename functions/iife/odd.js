// Anonymous Function
const printOddNumbers = function(arr) {
  arr.forEach(num => {
    if (num % 2 !== 0) console.log(num);
  });
};

// IIFE
(function(arr) {
  arr.forEach(num => {
    if (num % 2 !== 0) console.log(num);
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
