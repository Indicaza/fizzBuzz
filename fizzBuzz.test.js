const fizzBuzz = require('./fizzBuzz');

describe('FizzBuzz Function', () => {
    let output = fizzBuzz(100); // Make sure to call fizzBuzz with argument 100

    test('should generate 100 elements', () => {
        expect(output.length).toBe(100);
    });

    test('should print the correct values for the entire sequence', () => {
        for (let i = 1; i <= output.length; i++) {
            const value = output[i - 1];
            const multipleOfThree = i % 3 === 0;
            const multipleOfFive = i % 5 === 0;

            if (multipleOfThree && multipleOfFive) {
                expect(value).toBe('FizzBuzz');
            } else if (multipleOfThree) {
                expect(value).toBe('Fizz');
            } else if (multipleOfFive) {
                expect(value).toBe('Buzz');
            } else {
                expect(value).toBe(i);
            }
        }
    });
});
