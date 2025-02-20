const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Obtém o ano atual automaticamente
const anoAtual = new Date().getFullYear();

// Pergunta o ano de nascimento
rl.question('Digite o ano de nascimento: ', (anoNascimento) => {
    anoNascimento = parseInt(anoNascimento, 10); // Converte a entrada para número inteiro
    const idade = anoAtual - anoNascimento;
    const idadeAlistamento = 18;
    
    if (idade < idadeAlistamento) {
        const anosFaltam = idadeAlistamento - idade;
        console.log(`Você ainda não precisa se alistar. Faltam ${anosFaltam} ano(s) para o alistamento.`);
    } else if (idade > idadeAlistamento) {
        const anosPassaram = idade - idadeAlistamento;
        console.log(`Seu período de alistamento foi há ${anosPassaram} ano(s).`);
    } else {
        console.log('Este é o seu ano de alistamento!');
    }
    
    rl.close();
});
