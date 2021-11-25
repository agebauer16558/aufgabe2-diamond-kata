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
}


// ## Mirror the input array by its x-axis
const mirrorByYAxis = (input) => {
    // The array the mutation is going to be saved in
    const output = [];
  
    // Go in every sub-array (element), save the index of it,
    // slice the last element and reverse it
    input.forEach((element, i) => {
      const tempArr = [];
      // Start by the first array and slice the last element
      const slicedElements = element.slice(0, -1);
  
      // Reverse the temp array of slicedElements and save it
      const reverseArray = slicedElements.reverse();
  
      // Go into the master-array (i = index 0) and push for every element e
      // in input-array the value to the output-array
      for (e = 0; e < input.length; e++) {
        tempArr.push(input[i][e]);
      }
  
      // Go into the temp reverseArray and push every element to the back of the
      // output-array
      for (i = 0; i < reverseArray.length; i++) {
        tempArr.push(reverseArray[i]);
      }
  
      output.push(tempArr);
    });
    return output;
}


// ## Mirror the diamond array at its x-axis
const mirrorByXAxis = (input) => {
    const output = [];
  
    const slicedElements = input.slice(0, -1);
        
    const reverseArray = slicedElements.reverse();
  
    for (i = 0; i < input.length; i++) {
      output.push(input[i]);
    }
  
    for (i = 0; i < reverseArray.length; i++) {
      output.push(reverseArray[i]);
    }
  
    return output;
}


// ## Put the created diamond array into an printed string 
const diamond = (input, callback) => {

    let elementsInArr = true;
  
    // Output array 
    let stringifiedArr = "";
  
    // Check if input has elements in it, if not don't continue
    if (input.length !== 0) {
      elementsInArr;
    }
    else {
      !elementsInArr; 
    }
  
    // If true, continue with the program, otherwise throw error
    if(elementsInArr) {
  
      // Join every element in stringifiedArray, and add a line-break after every element 
      input.forEach((element) => {
        stringifiedArr += element.join("");
        stringifiedArr += "\n"; 
  
        // If callback true (true if not undefined or 0) 
        // return the function callback with the array-element as its parameter  
        if (callback) return callback(element); 
        })
    }
    else {
      throw new Error ("Start again!")
    }
  
    return stringifiedArr;
}


// User input after file name (e.g. node diamondkata.js t ~)
const endChar = process.argv[2] || "g";
const replaceChar = process.argv[3];

// ## Add user-input for letter after file-name
// ##Optional opportunity to replace the connecting elements ("-") in the diamond
const index = (endChar) => {
    

  // When no endChar was entered, throw error 
  if (endChar === "") {
  throw new Error ("No letter entered!");
  }

  const charRangeRes = charRange(endChar);
  const quadrant = createQuadrant(charRangeRes);
  const mirroredByY = mirrorByYAxis(quadrant);
  const mirroredByX = mirrorByXAxis(mirroredByY);
  const createdDiamond = diamond(mirroredByX);

  // If no replaceChar was added, just save it in output
  // If replaceChar was added, replace the connecting elements
  if(!replaceChar) {
    const output = createdDiamond; 
    console.log(output);
    return output;
  }
  else {
    const output = createdDiamond.replace(/-/g, replaceChar);
    console.log(output);
    return output;
  }
}

index(endChar);

// ## Module Exports go here
module.exports = { charRange, createQuadrant, mirrorByYAxis, 
    mirrorByXAxis, diamond, index } 