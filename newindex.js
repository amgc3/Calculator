const readline = require('readline-sync')

class Arithmetics {
    constructor() {
        // dispatch table
        this.operators = {
            "+" : (a,b) => a + b ,
            "-" : function(a,b) { a - b },
            "*" : (a,b) => a * b,
            "/" : (a,b) => a / b,
        };
    }
    
    //list.splice(1) = tail
    calculate(operator, list) {
        return list.splice(1).reduce( this.operators[operator], list[0] ); 
    }

    createNumberArray(operands, arr) {
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

    run() {
        let arr = [];
        console.log("Please enter the operator:")
        let operator = readline.prompt();
        console.log(`How many numbers do you want to ${operator} ? `);
        const operands = readline.prompt();
        this.createNumberArray(operands, arr);
        const result = this.calculate(operator, arr)
        console.log(`The result is: ${result}`);

        
    }
}

class Vowels {
    
    run() {
        console.log("Please enter a string:");
        let str = readline.prompt();

        console.log("The vowel counts are:");
        //                              ////////////////////
        for (const  [vowel, counter] of Object.entries(this.countVowels(str))) {
            console.log(`${vowel}: ${counter}`)
        }
    }

    countVowels(str) {
        let seen = {}; // object of key/value pairs ("map")
        for (let element of ['a', 'e', 'i', 'o', 'u']) {
            seen[element] = 0;
            let vowel = element.toUpperCase();
            for (let i = 0; i < str.length; i++) {
                if (element === str[i]) {
                    seen[element]++;
                }
            }
        }
        console.log(seen);
        return seen; // { 'a' : 1, 'e' : 0 }
    }
}


console.log('\nWelcome to the calculator!')
console.log('==========================')

while (true) {
  console.log("\nWhich calculator mode do you want?");
  console.log("1) Arithmetic");
  console.log("2) Vowel counting")

  let calculationMode = readline.prompt();
  let handler;
  switch (calculationMode) {
      case '1': handler = new Arithmetics();
        break;
      case '2': handler = new Vowels(); 
        break;
  }
  handler.run();
}


// function frobnicate (foo) {
//     let bar = 1;
//     const asdf = 5;

//     console.log(foo);
//     console.log(bar);

//     foo++;

//     console.log(foo);
// }

// let foo = 2;
// frobnicate(foo);
// console.log(foo);
// console.log(bar);
// console.log(asdf);


// // --------------------

// doStuff();

// // hoisting

// function doStuff() { // global
//   1;   
// } 


// // for () {
// //     const doOtherStuff = function() { 1; }; // XXXX
// // }

// // doOtherStuff();                         // cannot call, out of scope

// // https://stackoverflow.com/questions/33040703/proper-use-of-const-for-defining-functions-in-javascript

