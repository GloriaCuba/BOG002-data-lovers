// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/
export const filtro = {
  filtroEspecie,filtroImagen,
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