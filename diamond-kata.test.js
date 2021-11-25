const { charRange, createQuadrant } = require("./diamond-kata");

// charRange
describe('charRange', () => {
    it('enters c to return the alphabet to the letter c', () => {
        expect(charRange('c').toString()).toBe(['A', 'B', 'C'].toString())
    })

    it('enters h to return the Alphabet until the letter h', () => {
        expect(charRange('h').toString()).toBe([
            'A', 'B', 'C',
            'D', 'E', 'F',
            'G', 'H'
        ].toString())  
    })
})


// createQuadrant
describe('createQuadrant', () => {
    it('provides an array and checks if the output has the desired pattern', () => {
        expect(createQuadrant(["A", "B", "C"]).toString()).toBe([
          [ '-', '-', 'A' ],
          [ '-', 'B', '-' ],
          [ 'C', '-', '-' ],
        ].toString())
    })
    
    it('provides an array and checks if the output has the desired pattern', () => {
        expect(createQuadrant(["A", "B", "C", "D", "E"]).toString()).toBe([
          [ '-', '-', '-', '-', 'A' ],
          [ '-', '-', '-', 'B', '-' ],
          [ '-', '-', 'C', '-', '-' ],
          [ '-', 'D', '-', '-', '-' ],
          [ 'E', '-', '-', '-', '-' ]
        ].toString())
    })
})