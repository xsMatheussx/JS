const readline = require("readline"); // importa o readline

const rl = readline.createInterface({
  //cria a interface
  input: process.stdin, // entrada de dados
  output: process.stdout, // saída de dados
});

rl.question("informe seu nome", (nome) => {
  //informar o nome
  console.log(`Olá, ${nome}!`); //captura o dado
  rl.close; // fecha a interface
});
