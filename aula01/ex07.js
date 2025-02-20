const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe a altura da parede: ", (alt) => {
  rl.question("Informe a largura da parede: ", (larg) => {
     let area = (parseFloat(alt) * (parseFloat(larg))); //considerando que a parede tem formato retângular
     let tinta = (area/2);

     console.log(`A área da parede é: ${area};  A quantidade de tinta em litros é: ${tinta}`);
     rl.close;
  });
});