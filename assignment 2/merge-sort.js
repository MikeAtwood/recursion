/*
    Build a function mergeSort that takes in an array and returns a sorted array, 
    using a recursive merge sort methodology.

    Tips:
    Think about what the base case is and what behavior is happening again and again 
    and can actually be delegated to someone else (e.g. that same method!).
    It may be helpful to check out the background videos again if you don’t quite 
    understand what should be going on.

*/



function mergeSort(array) {
    //base case
    if (array.length < 2) return array;
    const mid = Math.floor(array.length / 2)
    const leftArr = array.slice(0, mid)
    const rightArr = array.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortedArray = []
    while(leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortedArray.push(leftArr.shift())
        } else {
            sortedArray.push(rightArr.shift())
        }
    }
    return [...sortedArray, ...leftArr, ...rightArr]
    //return sortedArray.concat(leftArr, rightArr)
}

console.log(mergeSort([8, 1, 3, 2, 5, 7, 4, 6]))

// TODO:
// create array variable
// Functions looks at the array (length)
// Sort the left half and then the right half of the array
// Once sorted, Merge the two halves together
// console log with user choice of random numbers for the function to sort through


/* psuedocode:
look at array
open to middle of the array
look at the numbers on the left side
[if] number  

[else if] the number is smaller than the next
    search for smaller number in the left half of array



*/