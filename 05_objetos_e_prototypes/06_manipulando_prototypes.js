// const objA = {
//     chaveA: 'A'
// };

// const objB = {
//     chaveB: 'B'
// };

// Object.setPrototypeOf(objB, objA); //faz com o que o __proto__ de objB seja o mesmo de objA

// console.log(objB.chaveA);


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual /100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual /100));
}

const p1 = new Produto('camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

Object.setPrototypeOf(p2, Produto.prototype);

// p1.desconto(100)
p1.aumento(100);
console.log(p1);

p2.aumento(10);
console.log(p2);

p3.aumento(10);
console.log(p3);
