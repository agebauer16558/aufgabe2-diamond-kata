const { charRange, createQuadrant, mirrorByYAxis, 
    mirrorByXAxis, diamond } = require("./diamond-kata");

const endChar = process.argv[2] || "g";
const replaceChar = process.argv[3];

const index = (endChar) => {
    
  if (endChar === "") {
  throw new Error ("No letter entered!");
  }

  const charRangeRes = charRange(endChar);
  const quadrant = createQuadrant(charRangeRes);
  const mirroredByY = mirrorByYAxis(quadrant);
  const mirroredByX = mirrorByXAxis(mirroredByY);
  const createdDiamond = diamond(mirroredByX);

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