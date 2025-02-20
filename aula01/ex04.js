const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe sua primeira nota", (valor1) => {
  rl.question("informe sua segunda nota ", (valor2) => {
    let media = (parseFloat(valor1) + parseFloat(valor2)) / 2;
    console.log(`A média é: ${media}`);

    rl.close;
  });
});