import {filtro} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

/*Click del botón portal de la primera sección*/
document.getElementById("botonPortal").addEventListener("click", cambioDePagina);
function cambioDePagina() {
  ocultarMostrar("contenedor1","contenedor2");
}
/*Click del botón Clasificación por Especies*/
document.getElementById("botonEspecies").addEventListener("click", cambioDePagina2);
function cambioDePagina2(){
  ocultarMostrar("contenedor2","contenedor3");
}
/*Asignación de variables por el ID de las secciones en html*/
let contenedor2 = document.getElementById("contenedor2");
let contenedor3 = document.getElementById("contenedor3");
let contenedor4 = document.getElementById("contenedor4");
let contenedorPorEspecie= document.getElementById("contenedorPorEspecie");
let contenedor5 = document.getElementById("contenedor5");
let contenedorTodosPersonajes = document.getElementById("contenedorTodosPersonajes");
let contenedor6 = document.getElementById("contenedor6");
let contenedorPersonajesOrdenados = document.getElementById("contenedorPersonajesOrdenados");
/*Asignación de variable a la data de rick and morty*/
let arrayPersonajes=data.results;
/*Asignación de variables de returns de filtros*/
let nameImageTodos = filtro.filtroTodos(arrayPersonajes);
let copiaNameImageTodos=nameImageTodos.slice();
filtro.ordenarTodos(copiaNameImageTodos);
console.log (copiaNameImageTodos);

/*Click del botón ver todos los personajes*/
document.getElementById("botonPersonajes").addEventListener("click", function Personajes(){
  for(let i=0; i<arrayPersonajes.length;i++){ 
    let campoTexto=document.createElement("p");
    campoTexto.className="nombreTodosPersonajes";
    contenedorTodosPersonajes.appendChild(campoTexto);
    campoTexto.innerHTML=nameImageTodos[i].name;
    let campoImagen=document.createElement("img");
    campoImagen.className="imagenesTodosPersonajes";
    campoImagen.src= nameImageTodos[i].image;
    contenedorTodosPersonajes.appendChild(campoImagen);
  }
 contenedor2.style.display="none";
 contenedor5.style.display="block";
});
/*Click del botón ordenar todos los personajes*/
document.getElementById("botonOrdenar").addEventListener("click", function Ordenar(){
  for(let i=0; i<arrayPersonajes.length;i++){
    let campoImagen=document.createElement("img");
    campoImagen.className="imagenesTodosPersonajes";
    campoImagen.src= copiaNameImageTodos[i].image;
    contenedorPersonajesOrdenados.appendChild(campoImagen); 
    let campoTexto=document.createElement("p");
    campoTexto.className="nombreTodosPersonajes";
    contenedorPersonajesOrdenados.appendChild(campoTexto);
    campoTexto.innerHTML=copiaNameImageTodos[i].name;
  }
  contenedor5.style.display="none";
  contenedor6.style.display="block";
});



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
