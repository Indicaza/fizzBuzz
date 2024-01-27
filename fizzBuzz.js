// fizzBuzz.js
function fizzBuzz(n) {
    let output = [];
    for (let i = 1; i <= n; i++) {
        let result = '';
        if (i % 3 === 0) result += 'Fizz';
        if (i % 5 === 0) result += 'Buzz';
        output.push(result || i);
    }
    return output;
}

module.exports = fizzBuzz;