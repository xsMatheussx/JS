const readline = require("readline"); // importa o readline

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe seu nome ", (nome) => {
  rl.question("informe seu salario ", (salario) => {
    console.log(`Olá, ${nome}! Você recebe o salário de ${salario}.`);

    rl.close;
  });
});