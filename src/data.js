// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/

/*function filtroEspecie(arrayPersonajes,condicion){
  
 return arrayPersonajes.filter(function(elemento){
    return elemento.species===condicion;
})
}
*/
/*const filtroEspecie = (arrayPersonajes,condicion) => {
  return arrayPersonajes.filter((elemento)=>{
    return elemento.species===condicion;
  })
}
*/
//Funciones para filtrar el array principal con la codicion 
export const filtroEspecie = (arrayPersonajes, condicion) => 
  arrayPersonajes.filter(elemento =>
    elemento.species === condicion
  );
 

export const filtroImagen = arrayFiltro =>
  arrayFiltro.map(elemento =>
  elemento.image
); 

//Funciones para: primero obtener los nombres y las imagenes con el metodo.map y luego ordenar con sort
export function filtroTodos(arrayPersonajes){
  return arrayPersonajes.map(elementos => ({name:elementos.name,image:elementos.image}))
}

export function ordenarTodos(copiaNameImageTodos){
  copiaNameImageTodos.sort((a, b) => {
  if(a.name < b.name) return -1; //Ordena de la a-z
  //if(a.name > b.name) return 1;
  return 0;
  })
}

export const filtro = {
  filtroEspecie,filtroImagen,filtroTodos, ordenarTodos,
}
