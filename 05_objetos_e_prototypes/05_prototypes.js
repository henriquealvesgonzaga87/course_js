// construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    this.nome + ' ' + this.sobrenome;
};

// instância
const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');

console.log(pessoa1, pessoa1.nomeCompleto());
console.log(pessoa2);
