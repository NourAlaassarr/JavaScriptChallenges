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

//Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
var CheckifNegative=window.prompt("Enter Number to check");

if(Number(CheckifNegative)<0)
{
    console.log("Negative");
}
else{
    console.log("Positive");
}

//Write a program that take 3 integers from user then print the max element and the min element.
var firstnumber=window.prompt("Enter first Number");
var secondnumber=window.prompt("Enter second Number");
var thirdnumber=window.prompt("Enter third Number");
let maximumNumber=Number(firstnumber)
let minimumnumber=Number(secondnumber)

if(maximumNumber<Number(thirdnumber))
{
    maximumNumber=Number(thirdnumber)
}

else if (maximumNumber<minimumnumber) {
    var x =maximumNumber
    maximumNumber=minimumnumber
    minimumnumber=x

} else if (minimumnumber>Number(thirdnumber)) {
    minimumnumber=Number(thirdnumber)
    
}

console.log("Max element =",maximumNumber)
console.log("min element =",minimumnumber)

//Write a program that allows the user to insert integer number then check If a number is oven or odd
var isEvenorOdd=window.prompt("Enter Number to check")
if(Number(isEvenorOdd) % 2==0)
{
    console.log("Even")
}
else{
    console.log("Odd")
}

//Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
var Checkvowels =window.prompt("Enter char to check").toLowerCase();
if(Checkvowels=='a'|| Checkvowels=='e'|| Checkvowels=='i'|| Checkvowels=='o'|| Checkvowels=='u'){
console.log(" vowel ")
}
else
{
    console.log("Consonant")
}

//Writeaprogramthat allow suser toinsertintegerthenprintallnumbersbetween1to that’s number
var inbetween =Number(window.prompt("Enter  Number to get inbetween"));
for(i=1;i<=inbetween;i++){
    console.log(i)
}

//Write a program that allows user to insert integer then print a multiplication table up to 12.
var multiplication =Number(window.prompt("Enter  Number to print multiplication table of"));
for(i=1;i<=12;i++){
    console.log(i*multiplication)
}

//- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers between 1 to this number
var inbetween =Number(window.prompt("Enter  Number to get even num inbetween"));
for(i=1;i<=inbetween;i++){
    if(i%2==0){
        console.log(i)
    }
    
}

// Writeaprogramthattaketwointegersthenprintthepower
var NUM =Number(window.prompt("Enter  Number "));
var power=Number(window.prompt("Enter  Number for power"));
var sum=1;
for(i=1;i<=power;i++){
    
    sum *=NUM;

}
console.log(sum)

// Write a program to enter marks of five subjects and calculate total, average and percentage.
var MarksSum=0;
var Marks;
for(i=1;i<=5;i++){
    Marks =Number(window.prompt("Enter  Mark"));
    MarksSum +=Marks;
    }
    console.log("Total marks =",MarksSum)
    console.log("Average Marks=",MarksSum/5)
    console.log("Percentage=",(MarksSum/5)*100)

// Write a program to input month number and print number of days in that month.

//Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer Find percentage and grade