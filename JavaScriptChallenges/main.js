// Write a program that allow to user enter number then printit
var number;
number=window.prompt("Enter A Number")
console.log(number)

//Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
var numberdivide=window.prompt("Enter A Number")
if(numberdivide % 3 === 0 && numberdivide % 4 === 0){
    console.log("Yes")
}
else{
    console.log("No")
}

// Write a program that allows the user to insert 2 integers then print the max

var number1=window.prompt("Enter first Number")
var number2=window.prompt("Enter second Number")
let maxNumber=Number(number1)
if(maxNumber<Number(number2))
{
    maxNumber=number2
}
console.log(maxNumber)

// Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
var CheckifNegative=window.prompt("Enter Number to check")

if(Number(CheckifNegative)<0)
{
    console.log("Negative")
}
else{
    console.log("Positive")
}

//Write a program that take 3 integers from user then print the max element and the min element.

// Write a program that allows the user to insert integer number then check If a number is oven or odd

// Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to that’s number