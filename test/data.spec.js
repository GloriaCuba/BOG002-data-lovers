//import { example, anotherExample } from '../src/data.js';
//import data from './data/rickandmorty/rickandmorty.js';
import {filtro, filtroEspecie, filtroImagen, filtroTodos, ordenarTodos} from '../src/data.js';

describe('filtro', () => {

  //Verificar si filtro es un objeto
  it('should be an object', () => {
    expect(typeof filtro).toBe('object');
  });

  describe('filtro.filtroEspecie', () => { 
  //Verificar si FiltroEspecie es una función
    it('is a function', () => {
      expect(typeof filtro.filtroEspecie).toBe('function');
    });
  //Verificar funcionamiento de FiltroEspecie 
      it('Esto verifica funcionamiento de FiltroEspecie', () => {
      const arrayTest = [{name:'Mochi',species:'Gatuna'},{name:'Linda',species:'Creidus'},{name:'Mota',species:'Gatuna'}]
      const gatuna = filtroEspecie(arrayTest,'Gatuna')
      expect(gatuna).toHaveLength(2)
    });
 });
 
  describe('filtro.filtroImagen',() =>{ 
  //Verificar funcionamiento de FiltroImagen (metodo .map)
  it('Esto verifica funcionamiento de FiltroImagen', () => {
    const arrayTest = [{name:'Mochi',species:'Gatuna'},{name:'Linda',species:'Creidus',image:'linda.png'},{name:'Mota',species:'Gatuna',image:'mota.png'}]
    const imagen = filtroImagen(arrayTest)
    expect(imagen).toEqual([undefined,"linda.png", "mota.png"]);
});
});

describe('filtro.filtroTodos',() =>{ 
  //Verificar funcionamiento de FiltroTodos para ver todos los personajes(name e image) con metodo .map
  it('Esto verifica funcionamiento de filtroTodos', () => {
    const arrayTest = [{name:'Mochi',species:'Gatuna'},{name:'Linda',species:'Creidus',image:'linda.png'},{name:'Mota',species:'Gatuna',image:'mota.png'}]
    
    expect(filtroTodos(arrayTest)).toEqual([{name:'Mochi',image:undefined },{name:"Linda",image:"linda.png"},{name:"Mota", image: "mota.png"}]);
    
});
});

describe('filtro.ordenarTodos',() =>{ 
  //Verificar funcionamiento de Filtro que ordena de a-z
  it('Esto verifica funcionamiento de filtro ordenar todos a-z', () => {
    const arrayTest = [{name:'Mochi'},{name:'Linda',image:'linda.png'},{name:'Mota',image:'mota.png'}] 
    expect(ordenarTodos(arrayTest)).toEqual([{name:"Linda",image:"linda.png"},{name:'Mochi',image:undefined },{name:"Mota", image: "mota.png"}]);
    
});
});


});