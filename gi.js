/*VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”
*/

let num1 = 3;
let num2 = 13;
let difference = num2 - num1;
console.log(`the difference between ${num2} and ${num1} is ${difference}`);

/*EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.                                  Example output: “The name Thomas is longer than John by 2 characters”
*/

let name1 = "Vegeta";
let name2 = "Goku";

let name1Length = name1.length;
let name2Length = name2.length;

if (name1Length > name2Length) {
    console.log(`The name ${name1} is longer than ${name2} by ${name1Length - name2Length} characters`);
  } else if (name2Length > name1Length) {
    console.log(`The name ${name2} is longer than ${name1} by ${name2Length - name1Length} characters`);
  } else {
    console.log(`The names ${name1} and ${name2} are the same length`);
  }

/*
MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
*/
/*
HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
/*

/*
VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
*/
