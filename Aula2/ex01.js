const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta a velocidade do carro
rl.question('Digite a velocidade do carro (km/h): ', (velocidade) => {
    velocidade = Number(velocidade); // Converte a entrada para número
    const limite = 80;
    const multaPorKm = 5;
    
    if (velocidade > limite) {
        const valorMulta = (velocidade - limite) * multaPorKm;
        console.log(`Você foi multado! O valor da multa é R$${valorMulta.toFixed(2)}.`);
    } else {
        console.log('Velocidade dentro do limite permitido!');
    }
    
    rl.close(); 
});
