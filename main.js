function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}


    const listaDeTeclas = document.querySelectorAll ('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;

//enquanto
while (contador <listaDeTeclas.length)  {
   
    const tecla = listaDeTeclas[contador]
   
     const instrumento =  tecla.classList[1];
    //template strig
     console.log(instrumento);

     const idAudio = `#som_${instrumento}`;

     //console.log(idAudio);
    
    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    contador = contador + 1;

    //console.log(contador);
}