import {filtro} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


/*Click del botón portal*/
document.getElementById("botonPortal").addEventListener("click", cambioDePagina);
  function cambioDePagina() {
    ocultarMostrar("contenedor1","contenedor2");
}
/*Click del botón Clasificación Especies*/
document.getElementById("botonEspecies").addEventListener("click", cambioDePagina2);
function cambioDePagina2(){
  ocultarMostrar("contenedor2","contenedor3");
}

/*Funciones para mostrar y ocultar todas las pantallas*/
function  ocultarMostrar (pantalla1,pantalla2){
  document.getElementById(pantalla1).style.display = "none";
  document.getElementById(pantalla2).style.display = "block";
}

/*Click del botón Categoría Humanos*/
document.getElementById("botonHumanos").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre);
});
document.getElementById("botonAliens").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});
document.getElementById("botonAnimales").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});
document.getElementById("botonVampiros").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});
document.getElementById("botonHumanoides").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});
document.getElementById("botonCronens").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});
document.getElementById("botonPoopys").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});
document.getElementById("botonEnfermedades").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});
document.getElementById("botonParasitos").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});
document.getElementById("botonRobots").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});
document.getElementById("botonMitologicos").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});
document.getElementById("botonDesconocidos").addEventListener("click", function(evento){
  botonFiltro(evento.target.dataset.nombre); 
});

let contenedor4=document.getElementById("contenedor4");
let contenedor3=document.getElementById("contenedor3");
let arrayPersonajes=data.results;
let contenedorPorEspecie= document.getElementById("contenedorPorEspecie");

function botonFiltro(condicion){
  let arrayFiltro= filtro.filtroEspecie(arrayPersonajes,condicion);
  let arrayImagen= filtro.filtroImagen(arrayFiltro);

for(let i=0; i<arrayFiltro.length;i++){ 
let campoImagen=document.createElement("img");
campoImagen.className="imagenPersonaje";
campoImagen.src= (arrayImagen[i]);

let infoTexto= arrayFiltro[i].name+"<br>"+ arrayFiltro[i].status+"<br>"+ arrayFiltro[i].gender; 

let campoTexto=document.createElement("p");
campoTexto.innerHTML= infoTexto;
campoTexto.className="nombrePersonaje";

contenedorPorEspecie.appendChild(campoImagen);
contenedorPorEspecie.appendChild(campoTexto);

document.getElementById("botonVolver").addEventListener("click", function(){
  contenedorPorEspecie.removeChild(campoImagen); 
  contenedorPorEspecie.removeChild(campoTexto);
  contenedor4.style.display="none";
  contenedor3.style.display="block";
});

}
contenedor3.style.display="none";
contenedor4.style.display="block";
}

/*Filtro de data SIN metodo Filter 
let nuevoArray =[];
function filtroEspecies(){
  for(let i=0; i<arrPersonajes.length; i++){
   if(arrPersonajes[i].species=="Human"){ 
    nuevoArray.push(arrPersonajes[i].name);
    nuevoArray.push(arrPersonajes[i].status);
    nuevoArray.push(arrPersonajes[i].origin .name);
    console.log(nuevoArray);
    }
  }
  contenedor3.style.display="none";
  contenedor4.style.display="block";
  document.getElementById("contenedorHumanos").innerHTML=nuevoArray;
}
*/