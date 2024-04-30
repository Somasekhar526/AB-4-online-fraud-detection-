// JavaScript code for input validation in a Node.js environment

// Import the readline module to read input from the console
const readline = require('readline');

// Create an interface to read input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Regular expression to match numeric values
const numericRegex = /^-?\d*\.?\d+$/;

// Function to validate input
function validateInput(inputValue) {
  if (!numericRegex.test(inputValue)) {
    console.log("Please enter a valid numeric value.");
    return false; // Deny input
  }
  return true; // Allow input
}

// Prompt the user to enter a numeric value
rl.question('Enter a numeric value: ', (inputValue) => {
  // Validate the input value
  if (validateInput(inputValue)) {
    console.log("Input is valid.");
    // Proceed with further processing if needed
  }
  
  // Close the interface
  rl.close();
});
