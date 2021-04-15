//import { example, anotherExample } from '../src/data.js';
//import data from './data/rickandmorty/rickandmorty.js';
import {filtro, filtroEspecie} from '../src/data.js';

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
      it('returns `filtroEspecie`', () => {
      const arrayTest = [{name:'Mochi',species:'Gatuna'},{name:'Linda',species:'Creidus'},{name:'Mota',species:'Gatuna'}]
      const gatuna = filtroEspecie(arrayTest,'Gatuna')
      expect(gatuna).toHaveLength(2)
    });
 });

});



/*describe('cipher.encode', () => {

  it('should be a function', () => {
    expect(typeof cipher.encode).toBe('function');
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => cipher.encode()).toThrow(TypeError);
    expect(() => cipher.encode(0)).toThrow(TypeError);
    expect(() => cipher.encode(null, [])).toThrow(TypeError);
    expect(() => cipher.encode(0, 0)).toThrow(TypeError);
  });

  it('should return "bcdefghijklmnopqrs" for "ABCDEFGHIJKLMNOPQR" with offset 33', () => {
    expect(cipher.encode('ABCDEFGHIJKLMNOPQR',33)).toBe('bcdefghijklmnopqrs');
  });

  // Hacker edition
  //
  // [Español]
  // Si decides agregar soporte para minúsculas y caracteres no alfabéticos descomenta el test a
  // continuación.
 
  it('should return "ÂmAĒAALAAANB" for "¡Los niños suman + y restan -!" with offset 33', () => {
    expect(cipher.encode('¡Los niños suman + y restan -!',33)).toBe('ÂmAĒAALAAANB');
    });

});
*/