function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }


}

const $listaTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < $listaTeclas.length; contador++){
    const tecla = $listaTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.addEventListener("click", function(){
        tocaSom(idAudio);
    });

    tecla.addEventListener("keydown", function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    });

    tecla.addEventListener("keyup", function(evento){
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.remove('ativa');
        }
    });


}
