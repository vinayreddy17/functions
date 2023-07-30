  const isPrime = (a) => {
    if (a<= 1) return false;
    if (a === 2) return true;
  
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const PrimeNumbers = (arr) => {
    return arr.filter((a) => isPrime(a));
  };
  
  
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const primeNumbers = PrimeNumbers(a);
  console.log(primeNumbers);