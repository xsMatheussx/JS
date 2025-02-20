const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// verificar se os segmentos podem formar um triângulo
function verificarTriangulo(a, b, c) {
  // Condição matemática para formar um triângulo
  if (a + b > c && a + c > b && b + c > a) {
    console.log('Os segmentos formam um triângulo.');
  } else {
    console.log('Os segmentos NÃO formam um triângulo.');
  }
}


rl.question('Digite o comprimento do primeiro segmento: ', (seg1) => {
  rl.question('Digite o comprimento do segundo segmento: ', (seg2) => {
    rl.question('Digite o comprimento do terceiro segmento: ', (seg3) => {
      // Convertendo as entradas para números
      const lado1 = parseFloat(seg1);
      const lado2 = parseFloat(seg2);
      const lado3 = parseFloat(seg3);

      
      verificarTriangulo(lado1, lado2, lado3);

  
      rl.close();
    });
  });
});
