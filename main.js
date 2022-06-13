function tocaSom(idAudioTecla){
    document.querySelector(idAudioTecla).play();
}

const $listaTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < $listaTeclas.length){
    const tecla = $listaTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.addEventListener("click", function(){
        tocaSom(idAudio);
    });

    contador = contador +1;
}
