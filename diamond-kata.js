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
    const letterUppercase = letter.toUpperCase();

    const charArray = [];
    let goOn = true;

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
      const arr = new Array(input.length);
  
      arr.fill("-");
  
      i++;
  
      const position = input.length - i - 1;
      
      arr[position] = input[i];
      quadrantArray.push(arr);
    });
  
    return quadrantArray;
}


// ## Mirror the input array by its x-axis
const mirrorByYAxis = (input) => {
    const output = [];
  
    input.forEach((element, i) => {
      const tempArr = [];
      const slicedElements = element.slice(0, -1);
  
      const reverseArray = slicedElements.reverse();
  
      for (e = 0; e < input.length; e++) {
        tempArr.push(input[i][e]);
      }
  
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
  
    let stringifiedArr = "";
  
    if (input.length !== 0) {
      elementsInArr;
    }
    else {
      !elementsInArr; 
    }
  
    if(elementsInArr) {
  
      input.forEach((element) => {
        stringifiedArr += element.join("");
        stringifiedArr += "\n"; 
  
        if (callback) return callback(element); 
        })
    }
    else {
      throw new Error ("Start again!")
    }
  
    return stringifiedArr;
}

module.exports = { charRange, createQuadrant, mirrorByYAxis, 
    mirrorByXAxis, diamond } 