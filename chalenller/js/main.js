// cajas de texto area -- co
let textEntrada = document.querySelector('.textArea');
let textoSalida = document.querySelector('.entrega_texto');

let cajaSalida = document.querySelector('.Salida');

const mensajeTextSal = document.querySelector('.caja_mensajes');

textEntrada.focus();



const botEncriptar = document.querySelector('.boton_encriptar');
const botDesEncriptar = document.querySelector('.boton_deencriptar');
const botCopy = document.querySelector('.copy');






function copiarAlPortapapeles() {

    navigator.clipboard.writeText(textoSalida.value);
    botCopy.value = 'COPIED';
    console.log('copiado');
    setTimeout(() =>{
        botCopy.value = 'COPY';
    }, 1000)


}

function mostrarResult(text){

    textoSalida.value = text;
    console.log(textoSalida.value);
    console.log(textEntrada.value);

    mensajeTextSal.classList.add('desacivado');
    botCopy.classList.remove('desacivado');
    

    if(screen.width < 470){

        cajaSalida.style.height = '50%';
        
    }else if(screen.width > 470 && screen.width <= 768){


        cajaSalida.style.height = '50%';

        console.log(cajaSalida.style.height)

    }
    

}


function encriptar(text){

    text = text.replace(/e/ig, "enter");
    text = text.replace(/i/ig, "imes");
    text = text.replace(/a/ig, "ai");
    text = text.replace(/o/ig, "ober");
    text = text.replace(/u/ig, "ufat");
    return text;

}

function desEncriptar(text){

    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text;

}

function copiarAlPortapapeles() {

    navigator.clipboard.writeText(textoSalida.value);
    botCopy.value = 'COPIED';
    console.log('copiado');
    setTimeout(() =>{
        botCopy.value = 'COPY';
    }, 1000)


}
/// boton copy
botCopy.addEventListener('click', copiarAlPortapapeles);



botEncriptar.addEventListener('click', function(){

    if(textEntrada.value == ''){
        alert('El campo esta vacio')
    }else if(textEntrada.value != ''){
        mostrarResult(encriptar(textEntrada.value));

    }
   
    
});
botDesEncriptar.addEventListener('click', function(){

    if(textEntrada.value == ''){
        alert('El campo esta vacio')
    }else if(textEntrada.value != ''){
        mostrarResult(desEncriptar(textEntrada.value));
    }

});
