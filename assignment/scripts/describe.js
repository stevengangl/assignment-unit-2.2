// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We made a variable called name and assigned its value to be "Dane".
// Than we make a if conditional  that says, if variable name equals "mary" then the console log will read "Hi Mary"
// The Variable name does not equal mary, so below that we use an else conditional becuase the other conditionals were false.
// Else conditional is used. We console.log("How do you do?");
//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make 2 variables, "code" and "secret". Code is given a value of 123 and secret has not been given a value yet.
// Than we make a if conditional that says if  the variable "code" equals 123(which it does) than we reassign values to our "secret" and "code" variables.
// Variable secret now is assigned the value "super". And variable code is now assigned the value "246".
// The next conditional says if code is greater than 250 than the variable "secret" will changes its value to "duper". This is not true so this conditional is not used.
// We would console.log ("secret"); Which would come up as "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Three Variables are established, "isStudent", "age" and "zip". isStudent is a boolean and is true. age is 34, and zip is 55407.
// Then it tries to run some compound conditionals.
// The first is a if conditional and says if "isStudent is true AND zip is greater than 80,000". This is not the correct line to run.
// Then we start using else if conditionals (because the first condition is false.) It says "isStudent equlas false OR age is less than 30". Neither side is true so this is not the correct line to run.
// The third option  says "isStudent is true". This is the correct, so this line will run.
// (If none of the conditions were true is would of ran the else conditional and the console.log would of said "how about the weather?"");
// We would console.log ("welcome to Prime!");

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - variable colorOne should be set to blue,variable  colorTwo should be set to red.
// in the if conditional we need to add that variable colorTwo also will be set to purple now.

// let colorOne = "blue";
// let colorTwo = "red";
// let mix = true;

// if (mix === true) {
//colorOne = "purple";
//colorTwo = "purple"; 
}

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// FIX - The code right now is using the wrong operator, it should be && (both conditionals are true)
// if (temp > 39 && time >= 4)

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// Fix - wrong operator used, and wrong variable order. they wrote minAge less than or equal to age.
// It should say if "age(21)" is greater than or equal to "minAge(21)" than the consol.log will say "enter".

// if(age >= minAge) {
//  console.log("enter");}
// else {
// console.log("no entry");}

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

