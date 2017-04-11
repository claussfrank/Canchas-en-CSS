var botonFut = document.getElementById('footBall');
var botonBasket = document.getElementById('basketBall');
var botonTenis = document.getElementById('tenis');

botonFut.addEventListener("click",mostarCanchaFut);
botonBasket.addEventListener("click",mostarCanchaBasquet);
botonTenis.addEventListener("click",mostarCanchaTenis);


function mostarCanchaFut(){
 var mostrarFootball = document.getElementById('canchaFootball');
 mostrarFootball.style.display="block";
}

function mostarCanchaBasquet(){
 var mostrarBasket = document.getElementById('canchaBasketBall');
 mostrarBasket.style.display="block";
}

function mostarCanchaTenis(){
 var mostrarTenis = document.getElementById('canchaTenis');
 mostrarTenis.style.display="block";
}
