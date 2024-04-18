# Programming Tasks

1. **Print a Number**
   - **Description:** Program to allow the user to enter a number then print it.
   - **Example:**
     ```
     Input: 5
     Output: 5
     ```
   - **Solution:**
     ```javascript
     var num = parseInt(window.prompt("Enter a number:"));
     console.log("Output: " + num);
     ```

2. **Divisibility Check**
   - **Description:** Program to check if a number entered by the user can be divided by 3 and 4.
   - **Example:**
     ```
     Input: 12
     Output: Yes
     ```
   - **Solution:**
     ```javascript
     var num = parseInt(window.prompt("Enter a number:"));
     if (num % 3 === 0 && num % 4 === 0) {
         console.log("Output: Yes");
     } else {
         console.log("Output: No");
     }
     ```

3. **Find Maximum**
   - **Description:** Program to find the maximum of two integers entered by the user.
   - **Example:**
     ```
     Input: 3 5
     Output: 5
     ```
   - **Solution:**
     ```javascript
     var num1 = parseInt(window.prompt("Enter first number:"));
     var num2 = parseInt(window.prompt("Enter second number:"));
     var max = (num1 > num2) ? num1 : num2;
     console.log("Output: " + max);
     ```
4. **Positive/Negative Check**
   - **Description:** Program to take an integer from the user and print "negative" if it's negative, otherwise print "positive".
   - **Example:**
     ```
     Input: -5
     Output: negative
     ```
     ```
     Input: 10
     Output: positive
     ```
   - **Solution:**
     ```javascript
     var num = parseInt(window.prompt("Enter a number:"));
     if (num < 0) {
         console.log("Output: negative");
     } else {
         console.log("Output: positive");
     }
     ```

5. **Max and Min of Three Integers**
   - **Description:** Program to take three integers from the user and print the maximum and minimum.
   - **Example:**
     ```
     Input: 7 8 5
     Output:
     max element = 8
     min element = 5
     ```
     ```
     Input: 3 6 9
     Output:
     Max element = 9
     Min element = 3
     ```
   - **Solution:**
     ```javascript
     var num1 = parseInt(window.prompt("Enter first number:"));
     var num2 = parseInt(window.prompt("Enter second number:"));
     var num3 = parseInt(window.prompt("Enter third number:"));
     var max = Math.max(num1, num2, num3);
     var min = Math.min(num1, num2, num3);
     console.log("max element = " + max);
     console.log("min element = " + min);
     ```

6. **Odd/Even Check**
   - **Description:** Program to take an integer from the user and check if it's odd or even.
   - **Example:**
     ```
     Input: 8
     Output: even
     ```
     ```
     Input: 7
     Output: odd
     ```
  

7. **Vowel/Consonant Check**
   - **Description:** Program to take a character from the user and print "vowel" if it's a vowel (a, e, i, o, u), otherwise print "consonant".
   - **Example:**
     ```
     Input: O
     Output: vowel
     ```
     ```
     Input: b
     Output: consonant
     ```
  

8. **Print Numbers**
   - **Description:** Program to take an integer from the user and print all numbers between 1 and that number.
   9. **Multiplication Table**
   - **Description:** Program to take an integer from the user and print a multiplication table up to 12 for that number.
   - **Example:**
     ```
     Input: 5
     Outputs:
     5 10 15 20 25 30 35 40 45 50 55 60
     ```
   - **Solution:**
     ```javascript
     var num = parseInt(window.prompt("Enter a number:"));
     for (var i = 1; i <= 12; i++) {
         console.log(num * i);
     }
     ```

10. **Even Numbers**
    - **Description:** Program to take an integer from the user and print all even numbers between 1 and that number.
    - **Example:**
      ```
      Input: 15
      Output: 2 4 6 8 10 12 14
      ```
   

11. **All Even Numbers**
    - **Description:** Program to take an integer from the user and print all even numbers between 1 and that number.
    - **Example:**
      ```
      Input: 15
      Output: 2 4 6 8 10 12 14
      ```
  
  

 12. **Marks Calculation**
    - **Description:** Program to enter marks of five subjects and calculate total, average, and percentage.
    - **Example:**
      ```
      Input: Enter Marks of five subjects:
      95
      76
      58
      90
      89
      Output:
      Total marks = 408
      Average Marks = 81.6
      Percentage = 81.6%
      ```
    
    

13. **Days in Month**
    - **Description:** Program to input the month number and print the number of days in that month.
    - **Example:**
      ```
      Input: Month Number: 1
      Output: Days in Month: 31
      ```
    -

14. **Grade Calculation**
    - **Description:** Program to input marks of five subjects and find the percentage and grade.
    - **Example:**
      ```
      Input: Enter Marks of five subjects:
      Physics: 85
      Chemistry: 78
      Biology: 92
      Mathematics: 88
      Computer: 80
      Output:
      Total marks = 423
      Average Marks = 84.6
      Percentage = 84.6%
      Grade = Grade A
      ```
   
