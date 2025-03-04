function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // mostra o valor da chave
        writable: false, // controla se o valor pode ser ou não alterado
        configurable: false, // controla se a chave pode ser apagada ou reconfigurar
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // mostra o valor da chave
            writable: false, // controla se o valor pode ser ou não alterado
            configurable: false, // controla se a chave pode ser apagada ou reconfigurar
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // mostra o valor da chave
            writable: false, // controla se o valor pode ser ou não alterado
            configurable: false, // controla se a chave pode ser apagada ou reconfigurar
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1);
console.log(Object.keys(p1));
