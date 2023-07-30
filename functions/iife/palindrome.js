 // Anonymous Function
 const findPalindromes = function(arr) {
    const isPalindrome = str => str === str.split('').reverse().join('');
  
    const palindromeArray = arr.filter(str => isPalindrome(str));
    console.log(palindromeArray);
  };
  
  // IIFE
  (function(arr) {
    const isPalindrome = str => str === str.split('').reverse().join('');
  
    const palindromeArray = arr.filter(str => isPalindrome(str));
    console.log(palindromeArray);
  })(["racecar", "hello", "level", "world"]);
  
