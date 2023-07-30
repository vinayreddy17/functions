const isPalindrome = (str) => {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
      };
      
      const Palindromes = (strArr) => {
        return strArr.filter((str) => isPalindrome(str));
      };
      
      
      const words = ['level', 'hello', 'radar', 'world'];
      const palindromes = Palindromes(words);
      console.log(palindromes);
      

  