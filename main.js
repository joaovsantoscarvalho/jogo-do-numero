let numeroAleatorio = Math.floor(Math.random() *100) +1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    } 

    palpites.textContent += palpiteUsuario + " ";

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! você Acertou";
        ultimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "FIM DE JOGO!!";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else {
        ultimoResultado.textContent = "ERRADO";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = "O ultimo palpite foi muito baixo";
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = "O ultimo palpite foi muito alto";
        }
    }
        
contagemPalpites++;
campoPalpite.value = "";
campoPalpite.focus();
}

envioPalpite.addEventListener('click',verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiniciar = document.createElement('button');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.textContent = 'Reniciar Jogo';
    botaoReiniciar.ClassList.add('botaoReiniciar');
    botaoReiniciar.addEventListener('click', reiniciarJogo);
}

function reniciarJogo() {
    contagemPalpites = 1;
    const paragrafosReniciar = document.querySelectorAll('.paragrafosResultados p');
    for (const paragrafoReniciar of paragrafosReniciar) {
        paragrafoReniciar.textcontent = "";
    }

    botaoReniciar.parentNode.renmoveChild(botraoReniciar);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
