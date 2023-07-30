const convertToTitleCaps = function(arr) {
    const titleCapsArray = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log(titleCapsArray);
  };
  
  // IIFE
  (function(arr) {
    const titleCapsArray = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    console.log(titleCapsArray);
  })(["hello", "world", "javascript"]);