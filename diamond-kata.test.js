const { charRange, createQuadrant, mirrorByYAxis, 
    mirrorByXAxis } = require("./diamond-kata");

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