let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
console.log (numeroSecreto)
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag)
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function ExibirMensagem() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 50');
}
ExibirMensagem()

function verificarChute(){
    let chute = document.querySelector('input').value;
    

    if ( chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce Descobriu o Numero Secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
        exibirTextoNaTela('p','O Numero secreto é menor');
    } else {
        exibirTextoNaTela('p','O numero secreto é maior');
    }
    tentativas++;
    limparCmapo()
    
    }
   }
   // Limpar/Reset Campo.
function limparCmapo(){
    chute = document.querySelector('input');
    chute.value ='';
}
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();

   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }

}
function ReiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCmapo();
    tentativas = 1;
    ExibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled',true)

}