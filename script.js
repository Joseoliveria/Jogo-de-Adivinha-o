const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById('palpite').value);
    tentativas++;

    if (palpite === numeroSecreto) {
        document.getElementById('resultado').textContent = 'Parabens! Voçe acertou!';
    } else if (palpite < numeroSecreto) {
        document.getElementById('resultado').textContent = 'Tente um numero maior';
    } else{
        document.getElementById('resultado').textContent = 'Tente um numero menor';
    }

    document.getElementById('tentativas').textContent = `Tentativas: ${tentativas}`;
}