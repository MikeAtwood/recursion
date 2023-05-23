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


*/