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
        if (currentNumber % 2!== 0) {
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