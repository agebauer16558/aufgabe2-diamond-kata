// Saved alphabet in an array
const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  
  
// ## Put in a wished letter 
const charRange = (letter) => {
    // Change letter to uppercase, if different
    const letterUppercase = letter.toUpperCase();

    const charArray = [];
    let goOn = true;

    // If goOn is true push letters from the alphabet into outputArray
    // If put-in letter is the same as the element stop
    alphabet.forEach((element) => {
        if (goOn) charArray.push(element);
        if (element === letterUppercase) goOn = false;
    });

    if (goOn) throw new Error("No letter of the alphabet");

    return charArray;
};


// ## Define the first quadrant of the array 
// ## Push the letters from right to left to the next index
const createQuadrant = (input) => {
    const quadrantArray = [];
    let i = -1;
   
    input.forEach((element) => {
      // Create a new array with the length of input
      const arr = new Array(input.length);
  
      // Fill this array with given string
      arr.fill("-");
  
      // Have a variable iterate upwards
      i++;
  
      // With every element iterate to the left in the array with  
      const position = input.length - i - 1;
      
      // Eqaulize the position in arr with the index of an element of input
      // Push the element saved in arr[position] into quadrantArray and go again
      arr[position] = input[i];
      quadrantArray.push(arr);
    });
  
    return quadrantArray;
  };

// ## Module Exports go here
module.exports = { charRange, createQuadrant } 