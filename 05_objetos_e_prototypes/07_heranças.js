function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco
}


Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // faz com o que o prototype de camiseta seja produto
Camiseta.prototype.constructor = Camiseta; // retorna o construtor para função construtora

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
console.log(produto)
console.log(camiseta);
