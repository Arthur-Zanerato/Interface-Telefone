const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (indice = 0; indice < listaDeTeclas.length; indice++) {

  const tecla = listaDeTeclas[indice];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }
}

for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  const tecla = listaDeTeclas[indice];

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}


//efeito título
function maquinaEscrever(evento) {
    const textoArray = evento.innerHTML.split('');
    evento.innerHTML = ' ';
    textoArray.forEach(function (palavra, i) {
        setTimeout(function () {
            evento.innerHTML += palavra;
        }, 150 * i);
    });
}

const frase = document.querySelector('.titulo');
maquinaEscrever(frase);
