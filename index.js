const readline = require('readline-sync')

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
printWelcomeMessage();
while (true) {
  console.log("\nWhich calculator mode do you want?");
  console.log("1) Arithmetic");
  console.log("2) Vowel counting")

  let calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    performArithmeticCalculation();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    performvoVowelCountingCalculation();
  }
}

function printWelcomeMessage() {
  console.log('\nWelcome to the calculator!')
  console.log('==========================')
}
function askForOperator() {
  console.log('Please enter the operator: ');
  return readline.prompt();
}

function askForNumOfOperands(operator) {
  console.log(`How many numbers do you want to ${operator} ? `);
  return readline.prompt();

};

function createNumberArray(operands) {
  let arr = [];
  for (let i = 1; i <= +operands; i++) {
    console.log(` Please enter number ${i}:`); 
    let num = readline.prompt();
    if(isNaN(+num)) {
      console.log( `Error, ${num} is not a number!`);
      return;
    }
    arr.push(+num);
  }return arr;
}

// function reduce(arr, n, reducer) {
//   let accumulator = n;
//   for (const element of arr) {
//     accumulator = reducer(accumulator, element);
//   } return accumulator;
//}


function reducerForOperator(operator) {
  switch(operator) {
    case '+' : return (a, b) => a + b;
    
    case '*' : return (a, b) => a * b;
    
    case '-' : return (a, b) => a - b;
   
    case '/' : return (a, b) => a / b;
    
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
  const vowels = ['a', 'e', 'i', 'o', 'u'];
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

