const { charRange, createQuadrant, mirrorByYAxis, 
    mirrorByXAxis, diamond } = require("./diamond-kata");

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

    it('enters H to return the Alphabet until the letter H', () => {
        expect(charRange('H').toString()).toBe([
            'A', 'B', 'C',
            'D', 'E', 'F',
            'G', 'H'
        ].toString())  
    })

    it('enters # to demonstrate the catch when a special character gets entered', () => {
        expect(() => charRange('#')).toThrow()  
    })

})


// createQuadrant
describe('createQuadrant', () => {
    it('provides an array and checks if the output expands until letter C.', () => {
        expect(createQuadrant(["A", "B", "C"]).toString()).toBe([
          [ '-', '-', 'A' ],
          [ '-', 'B', '-' ],
          [ 'C', '-', '-' ],
        ].toString())
    })
    
    it('provides an array and checks if the output expands until letter E.', () => {
        expect(createQuadrant(["A", "B", "C", "D", "E"]).toString()).toBe([
          [ '-', '-', '-', '-', 'A' ],
          [ '-', '-', '-', 'B', '-' ],
          [ '-', '-', 'C', '-', '-' ],
          [ '-', 'D', '-', '-', '-' ],
          [ 'E', '-', '-', '-', '-' ]
        ].toString())
    })
})


// mirrorByYAxis
describe('mirrorByYAxis', () => {
    it('provides an array and checks if the output has the desired pattern', () => {
        expect(mirrorByYAxis([
            ['-', '-', '-', '-', 'A'],
            ['-', '-', '-', 'B', '-'],
            ['-', '-', 'C', '-', '-'],
            ['-', 'D', '-', '-', '-'],
            ['E', '-', '-', '-', '-']
        ]).toString()).toBe([
            [
                '-', '-', '-',
                '-', 'A', '-',
                '-', '-', '-'
            ],
            [
                '-', '-', '-',
                'B', '-', 'B',
                '-', '-', '-'
            ],
            [
                '-', '-', 'C',
                '-', '-', '-',
                'C', '-', '-'
            ],
            [
                '-', 'D', '-',
                '-', '-', '-',
                '-', 'D', '-'
            ],
            [
                'E', '-', '-',
                '-', '-', '-',
                '-', '-', 'E'
            ]
        ].toString())
    })
})


// mirrorByXAxis
describe('mirrorByXAxis', () => {
    it('provides an array and checks if the output has the desired pattern', () => {            
        expect(mirrorByXAxis([
            [ '-', '-', '-', '-', 'A', '-', '-', '-', '-', ],
            [ '-', '-', '-', 'B', '-', 'B', '-', '-', '-', ],
            [ '-', '-', 'C', '-', '-', '-', 'C', '-', '-', ],
            [ '-', 'D', '-', '-', '-', '-', '-', 'D', '-', ],
            [ 'E', '-', '-', '-', '-', '-', '-', '-', 'E', ],
        ]).toString()).toBe([  [
            '-', '-', '-',
            '-', 'A', '-',
            '-', '-', '-'
        ],
        [
            '-', '-', '-',
            'B', '-', 'B',
            '-', '-', '-'
        ],
        [
            '-', '-', 'C',
            '-', '-', '-',
            'C', '-', '-'
        ],
        [
            '-', 'D', '-',
            '-', '-', '-',
            '-', 'D', '-'
        ],
        [
            'E', '-', '-',
            '-', '-', '-',
            '-', '-', 'E'
        ],
        [
            '-', 'D', '-',
            '-', '-', '-',
            '-', 'D', '-'
        ],
        [
            '-', '-', 'C',
            '-', '-', '-',
            'C', '-', '-'
        ],
        [
            '-', '-', '-',
            'B', '-', 'B',
            '-', '-', '-'
        ],
        [
            '-', '-', '-',
            '-', 'A', '-',
            '-', '-', '-'
        ]

        ].toString())
    })
})


// diamond
describe('diamond', () => {
    it('should return nothing', () => {
        const mockCallback = jest.fn();
        diamond([], mockCallback);
    
        expect(mockCallback.mock.calls.length).toBe(0);
    })

    it('should return the diamond', () => {    
        const mockCallback = jest.fn();
        diamond([
        ["-", "-", "-", "-", "A", "-", "-", "-", "-"],
        ["-", "-", "-", "B", "-", "B", "-", "-", "-"],
        ["-", "-", "C", "-", "-", "-", "C", "-", "-"],
        ["-", "D", "-", "-", "-", "-", "-", "D", "-"],
        ["E", "-", "-", "-", "-", "-", "-", "-", "E"],
        ["-", "D", "-", "-", "-", "-", "-", "D", "-"],
        ["-", "-", "C", "-", "-", "-", "C", "-", "-"],
        ["-", "-", "-", "B", "-", "B", "-", "-", "-"],
        ["-", "-", "-", "-", "A", "-", "-", "-", "-"],
        ], mockCallback); 
        expect(mockCallback.mock.calls.length).toBe(9);
    })
})
