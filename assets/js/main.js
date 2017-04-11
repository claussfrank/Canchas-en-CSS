var botonFut = document.getElementById('footBall');
var botonBasket = document.getElementById('basketBall');
var botonTenis = document.getElementById('tenis');

botonFut.addEventListener("click",mostarCanchaFut);
botonFut.addEventListener("dblclick",ocultarCanchaFut);
botonBasket.addEventListener("click",mostarCanchaBasquet);
botonBasket.addEventListener("dblclick",ocultarCanchaBasquet);
botonTenis.addEventListener("click",mostarCanchaTenis);
botonTenis.addEventListener("dblclick",ocultarCanchaTenis);

function mostarCanchaFut(){
 var mostrarFootball = document.getElementById('canchaFootball');
 mostrarFootball.style.display="block";
}
function ocultarCanchaFut(){
 var ocultarFootball = document.getElementById('canchaFootball');
 ocultarFootball.style.display="none";
}

function mostarCanchaBasquet(){
 var mostrarBasket = document.getElementById('canchaBasketBall');
 mostrarBasket.style.display="block";
}

function ocultarCanchaBasquet(){
 var ocultarBasket = document.getElementById('canchaBasketBall');
 ocultarBasket.style.display="none";
}
function mostarCanchaTenis(){
 var mostrarTenis = document.getElementById('canchaTenis');
 mostrarTenis.style.display="block";
}
function ocultarCanchaTenis(){
 var ocultarTenis = document.getElementById('canchaTenis');
 ocultarTenis.style.display="none";
}
