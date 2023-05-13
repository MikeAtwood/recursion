/*
    Now write another method fibsRec which solves the same problem recursively. 
    This can be done in just a couple of lines (or 1 if you’re crazy, but don’t
    consider either of these lengths a requirement… just get it done).
*/

// console.log('goodbye world')

function fibonacci(n) {
    // base cases
    if (n <= 0) return 'Pick a number greater than 0'
    if (n === 1) return [0]
    if (n === 2) return [0, 1]
    // recursive case
    const sequence = fibonacci(n - 1)
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
    return sequence
}
console.log(fibonacci(6))

// // Another example
// const fib = (num, seq = [0, 1]) => {
//     // base case
//     if (seq.length >= num) return seq.slice(0, num)
//     // recursive case
//     const newNum = seq.at(-1) + seq.at(-2)
//     seq.push(newNum)
//     return fib(num, seq)
// }

// console.log(fib(5))