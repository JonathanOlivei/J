let numerosGerados = [];
let numeroLimite = 10;
let tentativa = 1;
let numeroAleatori = gerarNumeroAleatorio();

console.log(numeroAleatori);

function exibeTexto (tag,texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}


function mensagensIniciais (){

    exibeTexto ('h1','Jogo do número secreto.');
    exibeTexto ('p','Escolha um número de 1 a 10.');
    
}
mensagensIniciais ();

function verificarChute(){

    let chute = document.querySelector('input').value;
    if (chute == numeroAleatori){

    exibeTexto('h1','ACERTOU'); 
    exibeTexto('P','Parabéns você acertou');

    let escritra = tentativa > 1 ? 'Tentativas' : 'Tentativa';
    exibeTexto('p',`Você teve um total de ${tentativa} ${escritra}`);  
    document.getElementById('reiniciar').removeAttribute('disabled');
    
    }
    else{

        if(chute > numeroAleatori){

            exibeTexto('p','O número aleatorio é menor');
            limparCampo();
             tentativa++

        }
        else{

            exibeTexto('p','O número é aleatorio é maior');
            tentativa++;
            limparCampo();

        }

    }

}

reiniciarJogo();

function gerarNumeroAleatorio() {

    let nuemeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeDeElementos = numerosGerados.length;

    if (quantidadeDeElementos == numeroLimite){

        numerosGerados = [];

    }

    if (numerosGerados.includes(nuemeroEscolhido)){

    return gerarNumeroAleatorio();

    }
    else{

        numerosGerados.push(nuemeroEscolhido);

        console.log(numerosGerados);

        return nuemeroEscolhido;

    }

}

function limparCampo(){

    chute = document.querySelector('input');
    chute.value = ''; 

}

function reiniciarJogo(){

    numeroAleatori = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagensIniciais ();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}
