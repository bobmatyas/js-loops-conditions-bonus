"use strict";

/* exercises at: 

https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php 

*/


// 1. Write a JavaScript program that accept two integers and display the larger.


// let integerOne = prompt('Enter an integer');
// let integerTwo = prompt('Enter a second integer');

let integerOne = 2;
let integerTwo = 23;

integerOne = parseInt(integerOne, 10);
integerTwo = parseInt(integerTwo, 10);

if (!isNaN(integerOne) && !isNaN(integerTwo)) {
  if (integerOne === integerTwo) {
    console.log(`The numbers are the same.`);
  } else if (integerOne > integerTwo) {
    console.log(`${integerOne} is larger.`);
  } else if (integerTwo > integerOne) {
    console.log(`${integerTwo} is larger.`);
  }
} else {
  console.log(`Please enter a valid number for both fields.`)
}


/*  2. Write a JavaScript conditional statement to find the sign of product of three numbers. 
Display an alert box with the specified sign. */

let firstSample = 3;
let secondSample = 2;
let thirdSample = 0;

let sampleProduct = (firstSample * secondSample * thirdSample);

if (sampleProduct < 0) {
  //alert(`-`);
} else if (sampleProduct > 0) {
  //alert(`+`);
} else {
  //alert(`Neither positive or negative.`);
}



/* 3. Write a JavaScript conditional statement to sort three numbers. 
Display an alert box to show the result.
*/

let sortNumberOne = 4;
let sortNumberTwo = 2;
let sortNumberThree = 5;


if (sortNumberOne > sortNumberTwo && sortNumberOne > sortNumberThree) {
  if (sortNumberTwo > sortNumberThree) {
    console.log(`${sortNumberOne} ${sortNumberTwo} ${sortNumberThree}`);
  } else if (sortNumberThree > sortNumberTwo) {
    console.log(`${sortNumberOne} ${sortNumberThree} ${sortNumberTwo}`);
  }
} else if (sortNumberTwo > sortNumberOne && sortNumberTwo > sortNumberThree) {
    if (sortNumberThree > sortNumberOne) {
      console.log(`${sortNumberTwo} ${sortNumberThree} ${sortNumberOne}`);
    } else {
      console.log(`${sortNumberTwo} ${sortNumberOne} ${sortNumberThree}`);
     }
} else if (sortNumberThree > sortNumberOne && sortNumberThree > sortNumberTwo) {
    if (sortNumberTwo > sortNumberOne) {
      console.log(`${sortNumberThree} ${sortNumberTwo} ${sortNumberOne}`);      
    }
    if (sortNumberOne > sortNumberTwo) {
      console.log(`${sortNumberThree} ${sortNumberOne} ${sortNumberTwo}`);      
    }
}



/* 4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result.  */


let sampleNumberOne = -5;
let sampleNumberTwo = -2;
let sampleNumberThree = -6;
let sampleNumberFour = 0;
let sampleNumberFive = -1;

let largestNumber = '';

if (sampleNumberOne > sampleNumberTwo) {
  largestNumber = sampleNumberOne;
} else if (sampleNumberTwo > sampleNumberOne) {
  largestNumber = sampleNumberTwo;
}

if (sampleNumberThree > largestNumber) {
  largestNumber = sampleNumberThree;
}

if (sampleNumberFour > largestNumber) {
  largestNumber = sampleNumberFour;
}

if (sampleNumberFive > largestNumber) {
  largestNumber = sampleNumberFive;
}

// alert(`${largestNumber}`);
//console.log(largestNumber);



/* 
5. Write a JavaScript for loop that will iterate from 0 to 15. 
For each iteration, it will check if the current number is odd or even, 
and display a message to the screen.
*/


for (let i = 0; i <= 15; i++) {
  if (i === 0) {
    console.log(`${i} is even`);
  } else if (i % 2 !== 0) {
    console.log(`${i} is odd.`)
  } else {
    console.log(`${i} is even`);
  }
}


/*

6. Write a JavaScript program which compute, the average marks of the 
following students Then, this average is used to determine the corresponding grade.

*/

let david = 80;
let vinoth = 77;
let divya = 88;
let ishitha = 95;
let thomas = 68;

let totalStudents = 5;
let totalPoints = david + vinoth + divya + ishitha + thomas;
let averageScore = totalPoints / totalStudents;
console.log(`Average: ${averageScore}`);

if (averageScore < 60) {
  console.log(`Grade: F`);
} else if (averageScore < 70) {
  console.log(`Grade: D`);
} else if (averageScore < 80) {
  console.log(`Grade: C`);
} else if (averageScore < 90) {
  console.log(`Grade: B`);
} else if (averageScore < 100) {
  console.log(`Grade: A`);
}



/*

7. Write a JavaScript program which iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the
 multiples of five print "Buzz". For numbers which are multiples of both three 
 and five print "FizzBuzz". 

*/

for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  }
  else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  } else {
    console.log(i);
  }
}


/* 
8. According to Wikipedia a happy number is defined by the following process : 
"Starting with any positive integer, replace the number by 
the sum of the squares of its digits, and repeat the process 
until the number equals 1 (where it will stay), or it loops endlessly 
in a cycle which does not include 1. Those numbers for which this 
process ends in 1 are happy numbers, 
while those that do not end in 1 are unhappy numbers (or sad numbers)". 
Write a JavaScript program to find and print the first 5 happy numbers. 
*/






/* 
9. Write a JavaScript program to find the armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the 
sum of the cubes of its digits is equal to the number itself. For example, 
371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371
*/

/* 27 + 343 + 1 = 371 */

for (let i = 0; i <= 999; i++) {
  let cast = i.toString(10).split('');
  let positionTotal = 0;
  //console.log(cast);
  for (let x = 0, n = cast.length; x < n; x++) {
    let individualNumber = cast[x];
    //console.log(individualNumber);
    let numberCubed = Math.pow(individualNumber, 3);
    //console.log(`This is ${individualNumber} cubed: ${numberCubed}`);
    positionTotal += numberCubed;
    //console.log(`This is the total of the position: ${positionTotal}`);
  }
  //console.log(`Updated Total: ${positionTotal}`);

  if (positionTotal === i) {
    console.log(`Armstrong Number: ${positionTotal}`);
  }
}


/*
10. Write a JavaScript program to construct the following pattern, 
using a nested for loop. 

*  
* *  
* * *  
* * * *  
* * * * *  

*/


let char = '';

for (let i = 1; i <= 5; i++) {
  for (let b = 0; b < i; b++) {
    char = `${char} *`;
  }
  console.log(char);
  char = '';
}

/*

11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

*/

let numberOneStart = 36;
let numberTwoStart = 48;

let maximum = Math.max(numberOneStart, numberTwoStart);

//console.log(minimum);

for (let i = maximum; i > 1; i--) {
  if (((numberOneStart % i) === 0) && ((numberTwoStart % i) === 0)) {
    console.log(i);
    break;
  }
}


/*
12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
*/

let multiples = 0;

for (let i = 1; i < 1000; i++) {
  if ((i % 3 === 0) || (i % 5 === 0)) {
    multiples += i;
  }
}

console.log(multiples);
