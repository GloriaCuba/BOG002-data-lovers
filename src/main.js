import { example } from './data.js';
// import data from './data/lol/lol.js';
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
document.getElementById("botonHumanos").addEventListener("click", filtroEspecies);


let arrPersonajes=data.results;

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
function filtroEspecies(){
let nuevoArray=arrPersonajes.filter(function(nuevaInfo){
  return nuevaInfo.species==="Human";
}) 
let infoImagen= nuevoArray.map(function(nuevaInfo2){
  return nuevaInfo2.image;
})

for(let i=0; i<nuevoArray.length;i++){ 
let campoImagen=document.createElement("img");
campoImagen.className="imagenes";
campoImagen.src= (infoImagen[i]);

let infoTexto= nuevoArray[i].name+"<br>"+ nuevoArray[i].status+"<br>"+ nuevoArray[i].gender; 

console.log(infoTexto);

let campoTexto=document.createElement("p");
campoTexto.innerHTML= infoTexto;
campoTexto.className="nombrePersonaje";

let contenedorHumanos= document.getElementById("contenedorHumanos");

contenedorHumanos.appendChild(campoImagen);
contenedorHumanos.appendChild(campoTexto);

}

contenedor3.style.display="none";
contenedor4.style.display="block";
}
