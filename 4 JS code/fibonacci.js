// npm install prompt-sync
const prompt = require("prompt-sync")();
var number = parseInt(prompt("Enter the number of terms: "));

console.log('Fibonacci Series:');
let n1 = 0, n2 = 1, nextTerm;
for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// function fibonacci(num) 
// { 
//         if(num == 1) 
//             return 0; 
//        if(num == 2) 
//             return 1; 
//         var num1 = 0; 
//         var num2 = 1; 
//         var sum; 
//         var i = 2; 
//        while (i < num)   
//         { 
//             sum = num1 + num2; 
//             num1 = num2; 
//             num2 = sum; 
//             i += 1; 
//         } 
//         return num2; 
// }  

// console.log(fibonacci(number));