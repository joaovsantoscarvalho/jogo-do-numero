let numeroAleatorio = Math.florr(Math.random() *100) +1;
const palpites = document.querySelector('.palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAlto = document.querySelector('.baixoOuAlto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemPalpites = 1;
let botaoReniciar;

function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    } 

    palpites.textContent += palpiteUsuario + " ";

    if (palpiteUsuario === numeroAleatorio) {

        ultimoResultado.textContent = "Parabéns! você Acertou";
        UltimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else {
        ultimoResultado.textContent = "ERRADO";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario < numeroAleatorio0 {
            baixoOuAlto.text.content = "O último palpite foi muito baixo";
        } else if (palpiteUsuario > "O último palpite foi muito alto";
    }
}

contagemPalpites++;
campoPalpiite.valeu = "";
campoPakpite.focus();
}

envioPalpite.addEventListener('clik',verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReniciar = document.createElement('button');
    document.body.appendChild(botaoReniciar);
    botaoReniciar.textContent = 'Reniciar Jogo';
    botaoReniciar.ClassList.add('botaoReniciar');
    botaoReniciar.addEventListener('clik', reniciarJogo);
}

function reniciarJogo() {
    contagemPalpites = 1;
    const paragrafosReniciar = document.querySelectorAll('.paragrafosResultado p');
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
