const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// calcular o preço da passagem
function calcularPrecoPassagem(distancia) {
    let precoPorKm = distancia <= 200 ? 0.50 : 0.45; // R$0.50 por km até 200km, R$0.45 para viagens mais longas
    const precoTotal = distancia * precoPorKm;
    
    console.log(`\nDistância da viagem: ${distancia} km`);
    console.log(`Preço por km: R$${precoPorKm.toFixed(2)}`);
    console.log(`Preço total da passagem: R$${precoTotal.toFixed(2)}\n`);
}

// Solicitando a distância da viagem
rl.question("Digite a distância que deseja percorrer em km: ", (distancia) => {
    const distanciaKm = parseFloat(distancia);
    
    if (isNaN(distanciaKm) || distanciaKm < 0) {
        console.log("Distância inválida!");
    } else {
        calcularPrecoPassagem(distanciaKm);
    }
    rl.close();
});
