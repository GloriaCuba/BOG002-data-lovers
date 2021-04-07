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
document.getElementById("botonHumanos").addEventListener("click", botonFiltro);


let arrayPersonajes=data.results;
let condicion="Human";

function botonFiltro(){
  let arrayFiltro= filtro.filtroEspecie(arrayPersonajes,condicion);
  let arrayImagen= filtro.filtroImagen(arrayFiltro);

for(let i=0; i<arrayFiltro.length;i++){ 
let campoImagen=document.createElement("img");
campoImagen.className="imagenes";
campoImagen.src= (arrayImagen[i]);

let infoTexto= arrayFiltro[i].name+"<br>"+ arrayFiltro[i].status+"<br>"+ arrayFiltro[i].gender; 

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