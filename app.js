alert('Boas vindas ao jogo do número secreto!');
let multiplicador = 1000
let numeroSecreto = parseInt (Math.random() * multiplicador + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto não for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${multiplicador}`);
    // se chute for igual ao numero secreto
    {if (chute == numeroSecreto ){
       break;
    } else {
        if (chute > numeroSecreto){
            alert (`O número secreto é menor que ${chute}`);
    } else {
        alert (`O número secreto é maior que ${chute}`);
    }
    tentativas++;
}
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);