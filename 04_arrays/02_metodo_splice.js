const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(-1, 1); //(start, qtd de elementos a apagar, elementos a adicionar)
nomes.splice(3, 0, 'Luiz');
nomes.splice(3, 2, 'Henrique', 'Luiz');
console.log(nomes);
