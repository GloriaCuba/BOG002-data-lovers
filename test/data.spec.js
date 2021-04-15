//import { example, anotherExample } from '../src/data.js';
import {filtro} from '../src/data.js';


describe('filtroEspecie', () => {
  it('is a function', () => {
    expect(typeof filtro.filtroEspecie).toBe('function');
  });

  it('returns `filtroEspecie`', () => {
    expect(filtro.filtroEspecie()).toBe('filtroEspecie');
  });
});
