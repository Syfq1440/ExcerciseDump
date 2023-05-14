let x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4
    
document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";  

// --------------------------------------------------------------------- 

// JavaScript Statements 1.1
// SEMICOLONS ";"
// Semicolons separate JavaScript statements.
// Add a semicolon at the end of each executable statement:

let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

// When separated by semicolons, multiple statements on one line are allowed:

a = 5; b = 6; c = a + b;

// --------------------------------------------------------------------- 

// JavaScript Statements 1.2
// JavaScript Code Blocks
// -JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.
// -The purpose of code blocks is to define statements to be executed together.
// -One place you will find statements grouped together in blocks, is in JavaScript functions: 

  function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
  }