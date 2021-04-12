// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/
export const filtro = {
  filtroEspecie,filtroImagen,filtroTodos, sortTodos,
}

function filtroEspecie(arrayPersonajes,condicion){
  
 return arrayPersonajes.filter(function(elemento){
    return elemento.species===condicion;
})
}

function filtroImagen(arrayFiltro){
return arrayFiltro.map(function(elemento){
  return elemento.image;
}) 
}

//Funciones para: primero obtener los nombres con .map y luego organizarlos con sort
function filtroTodos(arrayPersonajes){
  return arrayPersonajes.map(function(elementos){
    return elementos.name;
})
}

function sortTodos(copiaNameTodos){
  return copiaNameTodos.sort();
  
}
