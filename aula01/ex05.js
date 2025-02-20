const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("informe o numero inteiro", (numero) => {
  let ant = parseFloat(numero) - 1;
  let suc = parseFloat(numero) + 1;
  console.log(`O antecessor é: ${ant}; O sucessor é ${suc}`);

  rl.close;
});