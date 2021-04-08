// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/
export const filtro = {
  filtroEspecie,filtroImagen,filtroTodos
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

function filtroTodos(arrayPersonajes){
  return arrayPersonajes.map(function(elementos){
    return elementos.image;
})
}
/*function filtroNombre(arrayPersonajes){
  return 
}*/
