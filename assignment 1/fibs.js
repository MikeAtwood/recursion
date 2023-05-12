/*
    Using iteration, write a function fibs which takes a number and returns an array 
    containing that many numbers from the fibonacci sequence. Using an example input of 8, 
    this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

// console.log('hello world')

function fibonacci(n) {
    if (n <= 0) return 'Pick a number greater than 0'
    const sequence = [0, 1]
    for (let i = 2; i <= n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2]
        sequence.push(nextNumber)
        }
        return sequence
    }
console.log(fibonacci(5))

// function fibonacci(n) {
//     if (n <= 0) return 'Pick a number greater than 0'
//     const sequence = []
//     for (let i = 0; i < n; i++) {
//         if (i < 2) {
//             sequence.push(i)
//         } else {
//             const nextNumber = sequence[i - 1] + sequence[i - 2]
//             sequence.push(nextNumber)
//         }
//     }
//     return sequence
// }

// console.log(fibonacci(5))