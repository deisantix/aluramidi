function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
        
        if(!elemento.paused) {
            elemento.pause();
            elemento.currentTime = 0;
        }
        elemento.play();

    } else {
        console.log('Elemento não encontrado');
    }
}

function main() {
    var listaDeTeclas = document.querySelectorAll('.tecla');

    for(let contador = 0; contador < listaDeTeclas.length; contador++) {
        const tecla = listaDeTeclas[contador];

        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`;

        $(tecla).click(function () {
            tocaSom(idAudio);
        });

        $(tecla).on('keydown', function(event) {
            if(event.code === 'Space' || event.code === 'Enter') {
                tecla.classList.add('ativa');
                tocaSom(idAudio);
            }
        });

        $(document).on('keydown', function(event) {
            if(event.code === `Digit${contador + 1}`) {
                tecla.focus();
                tecla.classList.add('ativa');
                tocaSom(idAudio);
            }
        });

        $(document).on('keyup', function(event) {
            tecla.classList.remove('ativa');
        });
    }
}

main();