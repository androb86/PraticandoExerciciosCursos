let num1 = 0.7; // number
let num2 = 0.1; //number

num1 += num2; // 0.8 numeros com pontos flutuantes
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3

num1 = parseFloat(num1.toFixed(2)); // para resolver as imprecisões dos numero

num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; //1.0

//console.log(num1.toString() + num2);
//console.log(typeof num1);
// console.log(num1.toFixed(2)) // para arredondar um valor quebrado
//console.log(Number.isInteger(num1)); para verificar se o numero é inteiro.
console.log()