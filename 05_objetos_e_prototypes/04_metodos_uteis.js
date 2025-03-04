/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptior(o, 'prop')
...(spread)
 // já visto
 Object.keys (retorna as chaves)
 Object.freeze (congela o objeto)
 Object.defineProperties (define várias propriedades)
 Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Produto', preco: 1.8};
const caneca = {
    ...produto,
    material: 'Porcelana'
}; // faz uma cópia
const caneca2 = Object.assign({}, produto, {material: 'ceramica'}); // outra forma de fazer uma cópia

console.log(produto, caneca, caneca2)
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.values(produto));
console.log(Object.entries(produto));
