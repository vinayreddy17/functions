 // Anonymous Function
 const findPrimes = function(arr) {
    const isPrime = num => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
  
    const primesArray = arr.filter(num => isPrime(num));
    console.log(primesArray);
  };
  
  // IIFE
  (function(arr) {
    const isPrime = num => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
  
    const primesArray = arr.filter(num => isPrime(num));
    console.log(primesArray);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);