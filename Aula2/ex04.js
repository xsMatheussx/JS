const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// calcular o desconto
function calcularDesconto(nome, sexo, valorCompras) {
    let desconto = sexo.toLowerCase() === 'f' ? 0.15 : 0.05; // 15% para mulheres, 5% para homens
    
    const valorComDesconto = valorCompras * (1 - desconto);
    console.log(`\nCliente: ${nome}`);
    console.log(`Sexo: ${sexo.toUpperCase()}`);
    console.log(`Valor original: R$${valorCompras.toFixed(2)}`);
    console.log(`Desconto aplicado: ${(desconto * 100).toFixed(0)}%`);
    console.log(`Valor final: R$${valorComDesconto.toFixed(2)}\n`);
}

// Solicitando os dados
rl.question("Digite o nome do cliente: ", (nome) => {
    rl.question("Digite o sexo do cliente (M/F): ", (sexo) => {
        rl.question("Digite o valor das compras: R$", (valor) => {
            const valorCompras = parseFloat(valor);
            
            if (isNaN(valorCompras) || valorCompras < 0) {
                console.log("Valor de compras inválido!");
            } else {
                calcularDesconto(nome, sexo, valorCompras);
            }
            rl.close();
        });
    });
});