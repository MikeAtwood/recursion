// O(1) - Constant Complexity

function multiply(num1, num2) {
    return num1 * num2
}

/*
Here, no matter what the arguments we enter when we call the function, only two variables are 
created. It doesn't change. Therefore, we can consider the space this takes is always O(1)
*/


// O(n) Linear Complexity

function sumArr(arr) {
    const copyArr = arr.slice()
    let sum = 0
    copyArr.forEach((number) => {
        sum += number
    })
    return sum
}
console.log(sumArr([1, 3, 6, 7, 9])) // 26

/*
Most data structures you'll come across will have a space complexity of O(n). When you increase 
the number of items in your data structure, it increases the space that data structure occupies
in a linear way.

Here we have a method which accepts an array. Within it, we have two variables (sum and copyArr),
which holds a copy of the array passed in. Then we have a forEach loop that iterates over the 
array. The ammount of space that this algorithm takes depends on the array that is passed to it.
It could be 3 elements in the array or 300. When we dont know the length of an array, we refer to 
it as N, so we have N + 1 variable called sum. We know that we drop constants with Big O, so we are
left with N, or O(N) for its Big O Notation.

If you have an object that increases by size, the space it uses grows in a linear way.
*/

// Binary Search example

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) {
            console.log("Found it!")
            return mid;
        } else if (arr[mid] < target) {
            console.log("To the right")
            left = mid + 1
        } else {
            console.log("To the left")
            right = mid - 1
        }
    }
    console.log("The number you are searching for doesn't exist")
    return -1;
}
const arr = [1, 3, 5, 7, 9];
target = 9

console.log(binarySearch(arr, target)) // To the right, To the right, Found it!, 4 (index)