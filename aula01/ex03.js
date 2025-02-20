const readline = require("readline"); // importa o readline

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("informe o numero ", (valor1) => {
  rl.question("Informe o segundo numero ", (valor2) => {
    let soma = parseInt(valor1) + parseInt(valor2);
    console.log(`A soma é: ${soma}`);

    rl.close;
  });
});