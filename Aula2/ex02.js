const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// verificar se um ano é bissexto
function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

//verifica se é bissexto
rl.question('Digite um ano: ', (input) => {
    const ano = parseInt(input);
    
    if (isNaN(ano)) {
        console.log('digite um número válido.');
    } else {
        if (ehBissexto(ano)) {
            console.log(`${ano} é um ano bissexto.`);
        } else {
            console.log(`${ano} não é um ano bissexto.`);
        }
    }
    
    rl.close();
});