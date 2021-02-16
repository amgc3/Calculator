const readline = require('readline-sync')
let operator = "";
let operands = "";
let arr = [];

const printWelcomeMessage = function() {
  console.log('Welcome to the calculator!')
  console.log('==========================')
};
const askForOperator = function() {
  console.log('Please enter the operator: ');
  operator = readline.prompt();
}

const askForNumOfOperands = function() {
  console.log(`How many numbers do you want to ${operator} ? `);
  operands = readline.prompt();
}

const createNumberArray = function() {
  for (let i = 1; i <= +operands; i++) {
    console.log(` Please enter number ${i}:`);
    let num = readline.prompt();
    if(isNaN(+num)) {
      console.log( `Error, ${num} is not a number!`);
      return;
    }
    arr.push(+num);
  }
}
const performOperation = function() {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    switch(operator) {
      case '+' : result += arr[i];
      break;
      case '*' : result *= arr[i];
      break;
      case '-' : result -= arr[i];
      break;
      case '/' : result /= arr[i];
      break;

    }

  } console.log(`The result is: ${result}`);

}

const performvoVowelCountingCalculation = function() {
  console.log("Please enter a string:");
  let str = readline.prompt();
  console.log("The vowel counts are:");
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let element of vowels) {
    let counter = 0;
    let vowel = element.toUpperCase();
    for (let i = 0; i < str.length; i++) {
      if (element === str[i]) {
        counter++;
      }

    }
    console.log(`${vowel}: ${counter}`)
  }

}
const performArithmeticCalculation = function() {
  askForOperator();
  askForNumOfOperands();
  createNumberArray();
  performOperation();

}
const getCalculationMode = function() {
  let mode = readline.prompt();
  return mode;
}

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
printWelcomeMessage();
while (true) {
  console.log("Which calculator mode do you want?");
  console.log("1) Arithmetic");
  console.log("2) Vowel counting")

  let calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    performArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    performvoVowelCountingCalculation();
  }
}
