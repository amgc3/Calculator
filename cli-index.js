const readline = require("readline-sync");
const cliSelect = require("cli-select");
const chalk = require("chalk");
const figures = require("figures");

printWelcomeMessage();
async function askUser() {
  console.log();
  console.log(chalk.blue("Please select calculator mode"));
  console.log();
  const result = await cliSelect({
    values: ["Arithmetic", "Vowel counting"],
    selected: figures.circleFilled,
    unselected: figures.circle,
    valueRenderer: (value, selected) => {
      if (selected) {
        return chalk.underline.red(value);
      }
      return value;
    },
  });

  if (result.id === 0) {
    performArithmeticCalculation();
    askUser();
  } else {
    performvoVowelCountingCalculation();
    askUser();
  }
}
askUser();

function printWelcomeMessage() {
  console.log(chalk.blue("\nWelcome to the calculator!"));
  console.log(chalk.blue("=========================="));
}
function askForOperator() {
  console.log("Please enter the operator: ");
  return readline.prompt();
}

function askForNumOfOperands(operator) {
  console.log(`How many numbers do you want to ${operator} ? `);
  return readline.prompt();
}

function createNumberArray(operands) {
  let arr = [];
  for (let i = 1; i <= +operands; i++) {
    console.log(` Please enter number ${i}:`);
    let num = readline.prompt();
    if (isNaN(+num)) {
      console.log(`Error, ${num} is not a number!`);
      return;
    }
    arr.push(+num);
  }
  return arr;
}

function reducerForOperator(operator) {
  switch (operator) {
    case "+":
      return (a, b) => a + b;

    case "*":
      return (a, b) => a * b;

    case "-":
      return (a, b) => a - b;

    case "/":
      return (a, b) => a / b;
  }
}
function performOperation(operator, arr) {
  const reducer = reducerForOperator(operator);
  //  const n = arr[0];
  //  const tail = arr.slice(1);
  const result = arr.slice(1).reduce(reducer, arr[0]);
  console.log(`The result is: ${result}`);
}

function performvoVowelCountingCalculation() {
  console.log("Please enter a string:");
  let str = readline.prompt();
  console.log("The vowel counts are:");
  const vowels = ["a", "e", "i", "o", "u"];
  for (let element of vowels) {
    let counter = 0;
    let vowel = element.toUpperCase();
    for (let i = 0; i < str.length; i++) {
      if (element === str[i]) {
        counter++;
      }
    }
    console.log(`${vowel}: ${counter}`);
  }
}
function performArithmeticCalculation() {
  const operator = askForOperator();
  const operands = askForNumOfOperands(operator);
  const arr = createNumberArray(operands);
  performOperation(operator, arr);
  console.log(arr);
}
function getCalculationMode() {
  let mode = readline.prompt();
  return mode;
}
