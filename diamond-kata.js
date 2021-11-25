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

// ## Module Exports go here
module.exports = { charRange } 