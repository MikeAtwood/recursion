function oddNumbersLessThanTen() {
    let currentNumber = 1;

    while (currentNumber < 10) {
        if (currentNumber % 2 !== 0) {
            console.log(currentNumber);
        }

        currentNumber += 1;
    }
}

console.log(oddNumbersLessThanTen())

/*
STEP 1: assign a number to the currentNumber variable

STEP 2: We have a loop, for each iteration of the loop we do the following 
- Compare the currentNumber to see if its less than 10 - thats 1 step
- Check if the currentNumber is odd (line 5) - thats 1 step
- If it is an odd number, we output it to the terminal. that 1 step every 2 iterations
- Lastly, we increase the currentNumber by 1 each iteration (line 9)

STEP 3: To exit the loop, check to see if currentNumber is less than 10 anymore (line 4). That 
is one last step

So there are 3 steps for every loop iteration, that iterates through 9 different times, which is 
27 steps.
THEN we jave one step which iterates for only half the loop iteration which is 5 steps (the odd numbers)
Assigning an initial value to currentNumber and checking the exit condition of the loop is
one step each. 27 + 5 + 1 + 1 = 34 steps total. 

BUT, what if instead we have this, next example:
*/

function oddNumbers(maxNumber) {
    let currentNumber = 1;

    while (currentNumber < maxNumber) {
        if (currentNumber % 2 !== 0) {
            console.log(currentNumber)
        }
        currentNumber += 1
    }
}

/*
Lets say we set maxNnumber to 10 again, This still has 34 steps. But what if the next user inputs
a different number? Then our number of steps change. There is no concrete number we can use to 
measure the efficiency of our code because it changes based on an external input.

So what we really want to be able to measure is how the number of steps of our algorithm changes 
when the data changes (if the user inputs 24 for example)/ This helps us answer the question of 
whether the code we write will scale.
To do that we need to delve into a new concept: Asymptotic Notations and, in particular, Big O.
*/

// Asymptotic notation:
/*
: Are used to describe the run time of an algorithm. Because of an algorithms run time can differ 
depending on the input, there are several notations that measure that running time in different ways.
The 3 most common are:

- Big O notation - represent the upper bound of an algorithm. Meaning, the worst case scenario for how
the algorithm will perform

- Omega notation

- Theta notation

Big O Notation is the most common asymptotic notation you'll see referenced because you need to be 
sure the worst-case scenario for any code you write is scalable as the inputs grow in your application.

Big O is not a piece of code you can put your algorithm into and it tells you how efficient it is. You
will need to measure how the number of steps changes as the data grows, and using this you can apply
Big O Notation to it and measure it against other algorithms.

*/

console.log('~~~~')

function logFunc(n) {
    if (n === 1) {
        console.log(n)
    } else {
        logFunc(Math.floor(n / 2))
        console.log(n)
    }
}
console.log(logFunc(32))

console.log('~~~~')

// N x log N complexity

function mergeSort2(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge2(mergeSort2(left), mergeSort2(right))
}

function merge2(left, right) {
    let result = []
    let i = 0
    let j = 0

    while (i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i])
            i++;
        } else {
            result.push(right[j])
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}
console.log(mergeSort2([32, 10, 5, 8, 20]))
console.log('~~~~')
// Another nlogn function

